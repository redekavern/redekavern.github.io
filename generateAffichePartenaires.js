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


// Dossier racine où se trouvent vos images (ex: si le chemin est "/logos/partenaires/amevia.webp")
// Mettez ici le chemin absolu ou relatif vers le dossier parent sur votre disque Ubuntu.
const ROOT_ASSETS_DIR = path.join(__dirname, docDir, '/public');

const OUTPUT_FILE = path.join(__dirname, docDir, '/public/affiches/partenaires/redek-partenaires-2026-a0.png');
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
        // Nettoyer le chemin de l'image (ex: "/logos/partenaires/amevia.webp" -> "logos/partenaires/amevia.webp")
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

    // 2. Template HTML avec votre style CSS adapté au format A0
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <style>
        * { box-sizing: border-box; }
        body {
          margin: 0;
          padding: 60px;
          background: #ffffff;
          font-family: sans-serif;
          width: 2480px;
          height: 3508px; /* Hauteur fixe stricte respectant le ratio A0 */
          overflow: hidden; /* Empêche tout débordement */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .partners-grid {
          display: grid;
          /* 6 colonnes et environ 13 lignes pour faire tenir 78 logos confortablement */
          grid-template-columns: repeat(6, 1fr); 
          gap: 24px;
          width: 100%;
          flex: 1;
          align-content: center;
        }
        .partner-card {
          background: white;
          border: 1px solid #cbd5e1;
          border-radius: 14px;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Hauteur calculée pour que les 13 rangées entrent pile dans la hauteur disponible */
          height: 215px; 
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

    // 3. Lancement de Puppeteer pour compiler la page
    console.log("Génération du document en cours...");
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Définition de la vue au format A0 portrait
    await page.setViewport({ width: 2480, height: 3508, deviceScaleFactor: 2 });
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    // Export en PDF A0 haute qualité
    // await page.pdf({
    //     path: OUTPUT_FILE,
    //     format: 'A0',
    //     printBackground: true,
    //     landscape: false
    // });
    console.log("Génération de l'image haute définition en cours...");

    await page.screenshot({
        path: OUTPUT_FILE,
        type: 'png',
        fullPage: false
    });


    await browser.close();
    console.log(`Succès ! Fichier A0 généré ici : ${OUTPUT_FILE}`);
}

generateA0Grid().catch(console.error);