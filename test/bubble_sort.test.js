const bubble_sort = require("../src/bubble_sort")

test("Sorting an array", () => {
    const input = [5, 4, 3, 2, 1];
    const output = [1, 2, 3, 4, 5];
    expect(bubble_sort(input)).toStrictEqual(output)
})