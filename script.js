const container = document.querySelector('#container');
let gridSize = 256//prompt("size");

function makeGrid(gridSize){
 for (let i = 0; i < gridSize; i++) {
    let grid= document.createElement('div')
    grid.classList.add('grid');
    container.appendChild(grid)
}}
makeGrid(gridSize)
let grid =document.querySelectorAll('.grid')
grid.forEach(grid => {
    grid.addEventListener('mousemove', draw)
function draw(e){
    e.target.classList.add('red');   
}})
function reset(){
    let grid =document.querySelectorAll('.grid')
    grid.forEach(grid => {
     grid.classList.remove('red');    
    });
   
}
const button = document.querySelector('button');

button.addEventListener('click',reset)

