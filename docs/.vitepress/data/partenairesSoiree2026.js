const partenaires = [
    { name: "Barth", img: "/logos/partenaires/barth.jpg", url: "https://www.barth-immobilier.fr/ville_bien/Rennes_1___/immobilier-rennes.html" },
    { name: "Bruno Méril Coiffure", img: "/logos/partenaires/bruno-meril.webp", url: "https://www.brunomerilcoiffure.com/" },
    { name: "Carrefour City Bvd de Verdun", img: "/logos/partenaires/carrefour-city-verdun.webp", url: "https://www.carrefour.fr/magasin/city-rennes-verdun" },
    { name: "Carrefour City Cesson-Sévigné", img: "/logos/partenaires/carrefour-city-cesson.webp", url: "https://www.carrefour.fr/magasin/city-cesson-sevigne-rennes" },
    { name: "Carrefour City Léon Bourgeois", img: "/logos/partenaires/carrefour-city-leon-bourgeois.webp", url: "https://www.carrefour.fr/magasin/city-rennes-leon-bourgeois" },
    { name: "Carrefour City Villejean", img: "/logos/partenaires/carrefour-city-villejean.webp", url: "https://www.carrefour.fr/magasin/city-rennes-villejean" },
    { name: "Carrefour Contact Bourgbarré", img: "/logos/partenaires/carrefour-contact-bourgbarre.webp", url: "https://www.carrefour.fr/magasin/contact-bourgbarre-orgeres" },
    { name: "Carrefour Contact Bourg des Comptes", img: "/logos/partenaires/carrefour-contact-bourg-des-comptes.webp", url: "https://www.carrefour.fr/magasin/contact-bourg-des-comptes" },
    { name: "Cerfrance Brocéliande", img: "/logos/partenaires/cerfrance.webp", url: "https://www.cerfrance-broceliande.fr/" },
    { name: "Coiff & Décoiffé", img: "/logos/partenaires/coiff-decoiffe.webp", url: "https://www.planity.com/coiff-decoiffe-vern-35770-vern-sur-seiche" },
    { name: "DA Diffusion", img: "/logos/partenaires/dadiffusion.webp", url: "https://da-diffusion.fr/" },
    { name: "La Bretonne Crèperie", img: "/logos/partenaires/la-bretonne.webp", url: "https://la-bretonne.com/" },
    { name: "La Maison qui Respire", img: "/logos/partenaires/maisonquirespire.webp", url: "https://maisonquirespire.com/" },
    { name: "Level 3", img: "/logos/partenaires/level3.webp", url: "https://www.level3.bzh" },
    { name: "Mickaël Rénov'Peinture", img: "/logos/partenaires/logo-mickael-renov-peinture.webp", url: "https://www.mickael-renov-peinture.com/" },
    { name: "Netto", img: "/logos/partenaires/netto.webp", url: "https://www.netto.fr" },
    { name: "Running Conseil", img: "/logos/partenaires/running-conseil.webp", url: "https://www.running-conseil.com/runningconseil-rennes.html" },
]
// 2. Votre fonction de mélange (Algorithme de Fisher-Yates)
const melanger = (array) => {
    const nouveauTableau = [...array]; // On travaille sur une copie
    let current = nouveauTableau.length;
    while (current !== 0) {
        let random = Math.floor(Math.random() * current);
        current--;
        [nouveauTableau[current], nouveauTableau[random]] = [nouveauTableau[random], nouveauTableau[current]];
    }
    return nouveauTableau;
};

// 3. Export des partenaires mélangés
export const listePartenairesSoiree2026 = () => melanger(partenaires);