console.lot(sum(10));

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (1 % 3 === 0 || 1 % 5 === 0) sum += 1;
    return sum;
  }
}
