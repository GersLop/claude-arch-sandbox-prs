function titleCase(s) {
  if (typeof s !== 'string') {
    throw new TypeError('Input must be a string');
  }

  return s
    .trim()
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Test cases
console.log(titleCase("")); // Expected: ""
console.log(titleCase("   ")); // Expected: ""
console.log(titleCase("hello world")); // Expected: "Hello World"
console.log(titleCase("  multiple   spaces ")); // Expected: "Multiple Spaces"
console.log(titleCase("tAbS\tand\nnewlines")); // Expected: "Tabs And Newlines"

module.exports = { titleCase };