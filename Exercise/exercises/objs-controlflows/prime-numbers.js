showPrimes(20);

// Prime whose factors are only 1 and itself like 11 and 13
// composite like 12 because it can be divded by many factors

function showPrimes(limit) {
  for (let num = 2; num <= limit; num++)
    if (isPrime(number)) console.log(number);
}
function isPrime(number) {
  for (let factor = 2; factor < num; factor++)
    if (number % factor === 0) return false;
}
