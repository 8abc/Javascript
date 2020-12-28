showStars(5);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; 9 < row; i++) pattern += "*";
    console.log(pattern);
  }
}
