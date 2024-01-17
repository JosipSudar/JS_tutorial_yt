// .reduce() = reduce the elements of an array
//             to a single value

const grades = [75, 50, 90, 80, 65, 95];
const max = grades.reduce(getMax);
const min = grades.reduce(getMin);

function getMax(prev, next) {
  return Math.max(prev, next);
}

function getMin(prev, next) {
  return Math.min(prev, next);
}

console.log(max);
console.log(min);
