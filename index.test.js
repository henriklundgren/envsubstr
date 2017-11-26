/* global test, expect */
const parser = require('./parser');

test('parser', function() {
  const result = parser('${NODE_ENV}');
  expect(result).toEqual('test');
});

test('error', function() {
  expect(() => {
    return parser('env is ${__dirname}');
  }).toThrow();
});

