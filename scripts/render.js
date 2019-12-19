const render = (width, height) => {
  const board = document.getElementById("board");
  board.style.gridTemplateColumns = `repeat(${width + 3}, 30px)`;
  for (let w = 0; w < width + 3; w++) {
    for (let h = 0; h < height + 3; h++) {
      const div = document.createElement("div");
      if (w == 0 || h == 0 || w == width + 2 || h == height + 2) {
        div.id = "x";
        div.classList.add("border");
      } else {
        div.id = `${w - 1}|${h - 1}`;
      }
      div.classList.add("cell");
      board.appendChild(div);
    }
  }
};



