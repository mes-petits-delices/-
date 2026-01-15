window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

function ouvrirGalerie(type) {
    const modale = document.getElementById('fenetreGalerie');
    const titre = document.getElementById('titreGalerie');
    const grille = document.getElementById('contenuPhotos');
    grille.innerHTML = "";
    
    if (type === 'gateaux') {
        titre.innerText = "Nos Pâtisseries Fines";
        grille.innerHTML = `
            <div><img src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg"><p>Opéra Chocolat</p></div>
            <div><img src="https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg"><p>Éclair Vanille</p></div>
        `;
    } else if (type === 'burgers') {
        titre.innerText = "Nos Créations Salées";
        grille.innerHTML = `
            <div><img src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg"><p>Quiche Maison</p></div>
            <div><img src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg"><p>Petit Salé</p></div>
        `;
    }
    modale.style.display = "block";
}

function fermerGalerie() {
    document.getElementById('fenetreGalerie').style.display = "none";
}

window.onclick = function(event) {
    const modale = document.getElementById('fenetreGalerie');
    if (event.target == modale) { modale.style.display = "none"; }
}
