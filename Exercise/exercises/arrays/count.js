const numbers = [1, 2, 3, 4];

const count = countOccurences(numbers, 1);

console.log(count);

function countOccurences(array, searchElement) {
  // solution 1
  // let count = 0;
  // for (element of array)
  //     if (element === searchElement)
  //         count ++
  //     return count;

  // solution 2
  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement;
    console.log(accumulator, current, searchElement);
    return accumulator + occurence;
  }, 0);
}
