const marks = [80, 80, 50];

//Average = 70

//90 - 100: A
// 80- 89: B
// 70- 79: C
// 60- 69: D
// 0- 59: F

function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(num) {
  let sum = 0;
  for (let value of num) sum += value;
  return (average = num.length);
}
