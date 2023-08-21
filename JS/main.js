/**
 * Creare un bottone che al click genera la griglia quadrata
 * Diamo al contenitore una dimensione fissa
 * Facciamo un ciclo for da 1 a 100 e creiamo una cella
 * Calcolo le dimensioni della cella (100% / 10)
 * Al click sulla cella la coloriamo di azzuro e stampo il numero nel console.log dell'indice
 */

const btnGrid = document.getElementById('btn-griglia');
const grid = document.getElementById('griglia');

btnGrid.addEventListener('click', function () {
    generateGrid();
})

function generateGrid() {
    for (let i = 1; i < 100; i++) {
        const cella = document.createElement('div');
        cella.className += "size";
        cella.innerHTML = i;
    }
}