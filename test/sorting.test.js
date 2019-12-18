const bubble_sort = require("../src/bubble_sort")
const insertion_sort = require("../src/insertion_sort")

test("Bubble sorting an array", () => {
    const input = [5, 4, 3, 2, 1];
    const output = [1, 2, 3, 4, 5];
    expect(bubble_sort(input)).toStrictEqual(output)
})

test("Insertion sorting an array", () => {
    const input = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(insertion_sort(input)).toStrictEqual(output)
})