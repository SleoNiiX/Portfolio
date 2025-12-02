const parcours = [
  {
    title: "Baccalauréat",
    year: "2020-2023",
    description: "Spécialité Math, Physique-Chimie et NSI, découverte de l'informatique et passion pour le développement."
  },
  {
    title: "1ère année Licence",
    year: "2023-2024",
    description: "Bases solides en algorithmique, programmation et mathématiques appliquées."
  },
  {
    title: "1ère année BUT Informatique",
    year: "2024-2025",
    description: "Découverte des bases de l'informatique dans de nombreux domaines et Maitrise du langage Java."
  },
  {
    title: "2ème année BUT Informatique",
    year: "2025-2026",
    description: "Consolidation des connaissances et immersion dans des sujets plus techniques : architecture MVC, méthodes agiles, développement efficace et projet de stage."
  }
];

let currentIndex = 0;
const slide = document.getElementById('slide');

function showSlide(index) {
  const parcoursItem = parcours[index];
  slide.innerHTML = `<h3>${parcoursItem.title}</h3>
                     <p><em>${parcoursItem.year}</em></p>
                     <p>${parcoursItem.description}</p>`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + parcours.length) % parcours.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % parcours.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);