const container = document.querySelector('#container');
const input= document.querySelector('input')

const enterButton = document.querySelector('.enter');
enterButton.addEventListener('click',inputVal)


let gridSize = 256//prompt("size");






function inputVal() {
    if (input.value>0 && input.value<101){
    gridSize= (input.value)*(input.value)
    console.log(gridSize)
    makeGrid(gridSize)
    let grid =document.querySelectorAll('.grid')
grid.forEach(grid => {
    grid.addEventListener('mousemove', draw)
function draw(e){
    e.target.classList.add('red');   
}})
}}


function reset(){
    let grid =document.querySelectorAll('.grid')
    grid.forEach(grid => {
     grid.classList.remove('red');    
    });
   
}
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click',reset)

function makeGrid(gridSize){

    let grid =document.querySelectorAll('.grid')


    grid.forEach(grid => {
        grid.remove();    
       });
       
 for (let i = 0; i < gridSize; i++) {
    let grid= document.createElement('div')
    grid.classList.add('grid');
    container.appendChild(grid)
    let heightLength = Math.sqrt(gridSize)
    console.log(heightLength)   
    container.style.gridTemplateColumns= `repeat(${heightLength},1fr)`;
    container.style.gridTemplateRows= `repeat(${heightLength},1fr)`;
}}

makeGrid(gridSize)
let grid =document.querySelectorAll('.grid')
grid.forEach(grid => {
    grid.addEventListener('mousemove', draw)
function draw(e){
    e.target.classList.add('red');   
}})

