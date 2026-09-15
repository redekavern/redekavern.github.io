import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { partenaires } from './docs/.vitepress/data/partenaires.js';
const ROOT_ASSETS_DIR = path.join(__dirname, './docs/public');
const OUTPUT_DIR = path.join(__dirname, './docs/public/logos/partenaires-a4');

async function generateA4Posters () {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log(`${partenaires.length} partenaires trouvés. Lancement du navigateur...`);
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Format A4 paysage à 300 DPI : 3508 x 2480 pixels
    await page.setViewport({ width: 3508, height: 2480, deviceScaleFactor: 1 });

    for (const item of partenaires) {
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
              /* Agrandissement de la carte pour occuper presque toute la feuille A4 (laissant ~100px de marge extérieure globale) */
              width: 3300px;
              height: 2280px;
              background: #ffffff;
              border: 3px solid #cbd5e1;
              border-radius: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 80px; /* Bordure blanche interne réduite */
            }
            .logo-wrapper {
              /* Boîte englobante maximisée */
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
        const outputPath = path.join(OUTPUT_DIR, `partenaire-${safeName}-a4.png`);

        await page.screenshot({
            path: outputPath,
            type: 'png',
            fullPage: false
        });

        console.log(`Généré : ${item.name}`);
    }

    await browser.close();
    console.log(`Toutes les affiches A4 ont été générées dans : ${OUTPUT_DIR}`);
}

generateA4Posters().catch(console.error);