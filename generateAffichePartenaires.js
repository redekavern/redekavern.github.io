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

const OUTPUT_PATH = path.join(docDir, '/public/affiches/partenaires');

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

    // Fonction de génération du template avec couleur de fond paramétrable
    const getHtmlContent = (itemsHTML, bgColor, cardBgColor, borderColor) => `
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

    // Lancement de Puppeteer
    console.log("Lancement du navigateur pour la génération...");
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 2480, height: 3508, deviceScaleFactor: 2 });

    const affiches = [
        { name: 'light', bgColor: '#ffffff', cardBgColor: 'white', borderColor: '#cbd5e1' },
        { name: 'dark', bgColor: '#292727', cardBgColor: 'white', borderColor: '#444444' },
    ]
    const NB = 5
    for (let i = 1; i <= NB; i++) {
        // Mélange aléatoire du tableau des partenaires
        const partenaires = shuffleArray(originalPartenaires);

        console.log(`${partenaires.length} logos trouvés dans la liste.`);

        //  Générer le HTML des cartes pour chaque partenaire
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


        for (let bck of affiches) {
            let OUTPUT_FILE = path.join(OUTPUT_PATH, `redek-partenaires-2026-a0-${i}-${bck.name}.png`);
            // --- Version Light (#ffffff) ---
            console.log(`Génération de l'affiche version claire #${i}/${NB}...`);
            await page.setContent(getHtmlContent(itemsHTML, bck.bgColor, bck.cardBgColor, bck.borderColor), { waitUntil: 'domcontentloaded' });
            await page.screenshot({
                path: OUTPUT_FILE,
                type: 'png',
                fullPage: false
            });
            console.log(`Succès ! Fichier ${bck.name} #${i}/${NB} généré : ${OUTPUT_FILE}`);
        }
    }

    await browser.close();
    console.log("Toutes les affiches ont été générées avec succès !");
}

generateA0Grid().catch(console.error);