const mult = require('../src/mult');

it("should return correct result", () => {
    const result = mult(2, 5);
    expect(result).toBe(10);
})