/**
 * Creare un bottone che al click genera la griglia quadrata
 * Diamo al contenitore una dimensione fissa
 * Facciamo un ciclo for da 1 a 100 e creiamo una cella
 * Calcolo le dimensioni della cella (100% / 10)
 * Al click sulla cella la coloriamo di azzuro e stampo il numero nel console.log dell'indice
 */

const btnGrid = document.getElementById('btn-griglia');
const grid = document.getElementById('griglia');
const level = document.getElementById('livello');

btnGrid.addEventListener('click', function () {
    const selectLevel = parseInt(level.value);
    generateGrid(selectLevel);
})

function generateGrid(sizeCell) {

    grid.innerHTML = '';

    const dimension = sizeCell * sizeCell;

    for (let i = 1; i <= dimension; i++) {
        let cella = document.createElement('div');
        cella.className = "campo";

        if (sizeCell == 10) {
            cella.classList.add("size-10");
        } else if (sizeCell == 9) {
            cella.classList.add("size-9");
        } else if (sizeCell == 7) {
            cella.classList.add("size-7");
        }
        cella.innerHTML = i;
        grid.appendChild(cella);

        cella.addEventListener('click', function () {
            changeColor(cella, i);
        })

    }

}

function changeColor(cell, indice) {
    cell.style.backgroundColor = 'azure';
    console.log(indice);
}