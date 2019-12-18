const factorial = require("../src/factorial")

describe("factorial", function () {
    test("Should do factorials", () => {
        const input = [1, 2, 3, 4];
        const output = [1, 2, 6, 24];
        expect(factorial(input)).toEqual(output)
    });
});