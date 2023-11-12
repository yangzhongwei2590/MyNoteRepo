const arr = [1, 2, 3, 4, 5];

const res = arr.reduce((prev, curr) => {
  return prev + curr;
}, 0);

console.log(res); // 15
console.log(arr); // [1, 2, 3, 4, 5]
