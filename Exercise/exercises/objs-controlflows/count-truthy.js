const random = [0, null, undefined, "", 2, 3];

console.log(countyTruthy(random));

function countyTruthy(random) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
