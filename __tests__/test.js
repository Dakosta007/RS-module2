test('should throw an error for invalid input', () => {
  expect(() => someFunction('abc')).toThrow();
});
test('should add two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});
test('should handle very large numbers correctly', () => {
  expect(multiply(Number.MAX_SAFE_INTEGER, 2)).toBeGreaterThan(Number.MAX_SAFE_INTEGER);
});
test('should throw an error for invalid file path', () => {
  expect(() => readFile('path/to/nonexistent/file')).toThrow();
});
test('should sort an array in under 1 second', () => {
  const arr = generateLargeArray();
  const start = performance.now();
  sortArray(arr);
  const end = performance.now();
  expect(end - start).toBeLessThan(1000);
});
