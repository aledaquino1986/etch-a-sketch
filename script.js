const grid = document.querySelector(".grid");
const createGridButton = document.querySelector(".create-grid");
const gridInput = document.querySelector("#quantity");
const resetButton = document.querySelector(".reset");
let hue = 0;



const createBoard = (gridRowsAndColumns) => {
  grid.innerHTML = "";

  grid.style.setProperty("--number-of-columns", `repeat(${gridRowsAndColumns}, 1fr)`);
  grid.style.setProperty("--number-of-rows", `repeat(${gridRowsAndColumns}, 1fr)`);

  for (let i = 0; i < gridRowsAndColumns * gridRowsAndColumns; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", `square-${i}`);
    square.classList.add("cell");
    grid.appendChild(square);
  }
};


// Initial board will always start with 10 rows and 10 columns
createBoard(10);

const cells = document.querySelectorAll(".cell");

const cellOnMouseOver = (cell) => {
  cell.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      let cellTarget = e.target;
      hue += 1;
      let colorHue = `hsl(${hue}, 100%, 50%)`;
      cellTarget.classList.add("black");
      cellTarget.style.setProperty("--background-color-of-cell", colorHue);
    });
  });
};


// Applies onMouseOver to predetermined grid
cellOnMouseOver(cells);

createGridButton.addEventListener("click", () => {
  const gridSize = gridInput.value;
  createBoard(gridSize);
  const newCells = document.querySelectorAll(".cell");

  //Applies onMouseOver to newly created grid.
  cellOnMouseOver(newCells);
});

resetButton.addEventListener("click", () => {
  createBoard(10);
});
