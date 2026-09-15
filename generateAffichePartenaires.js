import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

// Récupération de __dirname en mode ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// ==========================================
// CONFIGURATION
// ==========================================
import { partenaires as originalPartenaires } from './docs/.vitepress/data/partenaires.js';
const docDir = "./docs"


// Dossier racine où se trouvent vos images
const ROOT_ASSETS_DIR = path.join(__dirname, docDir, '/public');

const OUTPUT_FILE_LIGHT = path.join(__dirname, docDir, '/public/affiches/partenaires/redek-partenaires-2026-a0-light.png');
const OUTPUT_FILE_DARK = path.join(__dirname, docDir, '/public/affiches/partenaires/redek-partenaires-2026-a0-dark.png');
// ==========================================

// Fonction pour mélanger un tableau de manière aléatoire
function shuffleArray (array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

async function generateA0Grid () {
    // Mélange aléatoire du tableau des partenaires
    const partenaires = shuffleArray(originalPartenaires);

    console.log(`${partenaires.length} logos trouvés dans la liste.`);

    // 1. Générer le HTML des cartes pour chaque partenaire
    const itemsHTML = partenaires.map(item => {
        const relativeImgPath = item.img.startsWith('/') ? item.img.slice(1) : item.img;
        const absoluteImgPath = path.join(ROOT_ASSETS_DIR, relativeImgPath);

        let dataUri = '';
        if (fs.existsSync(absoluteImgPath)) {
            const fileBuffer = fs.readFileSync(absoluteImgPath);
            const base64 = fileBuffer.toString('base64');
            dataUri = `data:image/webp;base64,${base64}`;
        } else {
            console.warn(`Attention : Image introuvable -> ${absoluteImgPath}`);
        }

        return `
      <div class="partner-card">
        <img src="${dataUri}" alt="${item.name}" class="partner-logo" />
      </div>
    `;
    }).join('');

    // Fonction de génération du template avec couleur de fond paramétrable
    const getHtmlContent = (bgColor, cardBgColor, borderColor) => `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <style>
        * { box-sizing: border-box; }
        body {
          margin: 0;
          padding: 60px;
          background: ${bgColor};
          font-family: sans-serif;
          width: 2480px;
          height: 3508px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .partners-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          width: 100%;
          flex: 1;
          align-content: center;
          justify-content: center; /* Centre automatiquement la dernière ligne incomplète */
        }
        .partner-card {
          background: ${cardBgColor};
          border: 1px solid ${borderColor};
          border-radius: 14px;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 215px; 
          /* Calcul pour avoir exactement 6 cartes par ligne en tenant compte des 5 espaces (gap) de 24px */
          width: calc((100% - (5 * 24px)) / 6); 
        }
        .partner-logo {
          max-width: 100%;
          max-height: 140px;
          object-fit: contain;
        }
      </style>
    </head>
    <body>
      <div class="partners-grid">
        ${itemsHTML}
      </div>
    </body>
    </html>
  `;

    // 3. Lancement de Puppeteer
    console.log("Lancement du navigateur pour la génération...");
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 2480, height: 3508, deviceScaleFactor: 2 });

    // --- Version Light (#ffffff) ---
    console.log("Génération de l'affiche version claire...");
    await page.setContent(getHtmlContent('#ffffff', 'white', '#cbd5e1'), { waitUntil: 'domcontentloaded' });
    await page.screenshot({
        path: OUTPUT_FILE_LIGHT,
        type: 'png',
        fullPage: false
    });
    console.log(`Succès ! Fichier clair généré : ${OUTPUT_FILE_LIGHT}`);

    // --- Version Dark (#292727) ---
    console.log("Génération de l'affiche version sombre...");
    await page.setContent(getHtmlContent('#292727', 'white', '#444444'), { waitUntil: 'domcontentloaded' });
    await page.screenshot({
        path: OUTPUT_FILE_DARK,
        type: 'png',
        fullPage: false
    });
    console.log(`Succès ! Fichier sombre généré : ${OUTPUT_FILE_DARK}`);

    await browser.close();
    console.log("Toutes les affiches ont été générées avec succès !");
}

generateA0Grid().catch(console.error);