import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { partenaires } from './docs/.vitepress/data/partenaires.js';
const ROOT_ASSETS_DIR = path.join(__dirname, './docs/public');
const OUTPUT_DIR = path.join(__dirname, './docs/public/logos/partenaires-a4');

// Fonction pour générer un tableau mélangé de 001 à 100 sans doublons
function generateUniqueRandomNumbers (count) {
    // 1. Créer un tableau de 1 à 100
    const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

    // 2. Mélanger le tableau (Fisher-Yates shuffle)
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // 3. Formater les nombres sur 3 chiffres (ex: "001", "042", "100")
    return numbers.map(num => String(num).padStart(3, '0'));
}

async function generateA4Posters () {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    if (partenaires.length > 100) {
        console.warn(`Attention : Vous avez ${partenaires.length} partenaires mais seulement 100 numéros uniques disponibles (001-100). Certains numéros vont se répéter.`);
    }

    // Génération de la liste de numéros uniques mélangés
    const uniqueNumbers = generateUniqueRandomNumbers();

    console.log(`${partenaires.length} partenaires trouvés. Lancement du navigateur...`);
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Format A4 paysage à 300 DPI : 3508 x 2480 pixels
    await page.setViewport({ width: 3508, height: 2480, deviceScaleFactor: 1 });

    let index = 0;
    for (const item of partenaires) {
        // Récupère un numéro unique de la liste mélangée (boucle sur les nombres si > 100 partenaires)
        const randomPrefix = uniqueNumbers[index % uniqueNumbers.length];
        index++;

        const relativeImgPath = item.img.startsWith('/') ? item.img.slice(1) : item.img;
        const absoluteImgPath = path.join(ROOT_ASSETS_DIR, relativeImgPath);

        let dataUri = '';
        if (fs.existsSync(absoluteImgPath)) {
            const fileBuffer = fs.readFileSync(absoluteImgPath);
            const base64 = fileBuffer.toString('base64');
            dataUri = `data:image/webp;base64,${base64}`;
        } else {
            console.warn(`Attention : Image introuvable -> ${absoluteImgPath}`);
            continue;
        }

        const htmlContent = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <style>
            * { box-sizing: border-box; }
            body {
              margin: 0;
              width: 3508px;
              height: 2480px;
              background: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .poster-card {
              width: 3300px;
              height: 2280px;
              background: #ffffff;
              border: 3px solid #cbd5e1;
              border-radius: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 80px;
            }
            .logo-wrapper {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          </style>
        </head>
        <body>
          <div class="poster-card">
            <div class="logo-wrapper">
              <img src="${dataUri}" alt="${item.name}" />
            </div>
          </div>
        </body>
        </html>
        `;

        await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });

        const safeName = item.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
        const outputPath = path.join(OUTPUT_DIR, `${randomPrefix}-partenaire-${safeName}-a4.png`);

        await page.screenshot({
            path: outputPath,
            type: 'png',
            fullPage: false
        });

        console.log(`Généré : ${item.name} -> ${randomPrefix}-partenaire-${safeName}-a4.png`);
    }

    await browser.close();
    console.log(`Toutes les affiches A4 ont été générées dans : ${OUTPUT_DIR}`);
}

generateA4Posters().catch(console.error);