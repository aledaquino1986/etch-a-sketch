const grid = document.querySelector(".grid");
const createGridButton = document.querySelector(".create-grid");
const gridInput = document.querySelector("#quantity");
const resetButton = document.querySelector(".reset");
let hue = 0;

const createBoard = (gridSizing) => {
  grid.innerHTML = "";

  grid.style.setProperty("--number-of-columns", `repeat(${gridSizing}, 1fr)`);
  grid.style.setProperty("--number-of-rows", `repeat(${gridSizing}, 1fr)`);

  for (let i = 0; i < gridSizing * gridSizing; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", `square-${i}`);
    square.classList.add("cell");
    grid.appendChild(square);
  }
};

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



cellOnMouseOver(cells);


createGridButton.addEventListener("click", () => {
  const gridSize = gridInput.value;
  createBoard(gridSize);
  const newCells = document.querySelectorAll(".cell");
  cellOnMouseOver(newCells);
});

resetButton.addEventListener("click", () => {
  createBoard(10);
})