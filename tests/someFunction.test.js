const sum = require('../src/utils/someFunction');

test('1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});