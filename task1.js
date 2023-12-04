/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

const factorial = (n) => {
  let fact = 1;
  while (n >= 1) {
    fact *= n;
    n--;
  }
  return fact;
};

console.log(factorial(5));
