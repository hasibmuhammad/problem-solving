/**
 * Time complexity: O(|a - b|)
 * Space Complexity: O(1)
 */
const sum = (a, b) => {
  let sum = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  }
  if (a > b) {
    for (let i = a; i >= b; i--) {
      sum += i;
    }
  }

  return sum;
};

console.log(sum(1, 4)); // 10
console.log(sum(10, 6)); // 40
