//references to HTML elements
const container = document.querySelector('#container');
const input= document.querySelector('input')
const enterButton = document.querySelector('.enter');
const resetButton = document.querySelector('.reset');

//default grid size
let gridSize = 256//prompt("size");

//takes input data to make a new sized grid and resets grid
function inputVal() {
  if (input.value>0 && input.value<101){
    gridSize= (input.value)*(input.value)
    makeGrid(gridSize)
    addListeners();
    }
}

//resets the grid to be blank
function reset(){
    let grid =document.querySelectorAll('.grid')
    grid.forEach(grid => {
     grid.classList.remove('red');    
    });
}

//draws the grid with default and input size
function makeGrid(gridSize){
    let grid =document.querySelectorAll('.grid')

    //removes default grid
    grid.forEach(grid => {
        grid.remove();    
    });

    //builds divs that make the grid
    for (let i = 0; i < gridSize; i++) {
        let grid= document.createElement('div')
        grid.classList.add('grid');
        container.appendChild(grid)

        //calc rows and columns for grid
        let heightLength = Math.sqrt(gridSize)  
        container.style.gridTemplateColumns= `repeat(${heightLength},1fr)`;
        container.style.gridTemplateRows= `repeat(${heightLength},1fr)`;
}}

//adds event listeners for each button and grid  
function addListeners(){
    enterButton.addEventListener('click',inputVal)
    resetButton.addEventListener('click',reset)

    let grid =document.querySelectorAll('.grid')
    grid.forEach(grid => {
        grid.addEventListener('mousemove', draw)
  });
}

//change color of grid
function draw(e){
    e.target.classList.add('red'); }

//draw the grid with default size when loading page
makeGrid(gridSize)

//activate listeners
addListeners()
