/**
 * A function return sorting array of unique value from a array of numbers
 * input: [1,5,2,1] => output: [1,2,5]
 * input: [4,2,2,3,2,2,2] => output: [2,3,4]
 */

// const unique_sort = (array) => {
//     const bread_crumbs = {};
//     for (let index = 0; index < array.length; index++) {
//         if (bread_crumbs[array[index]]) {
//             continue;
//         } else {
//             bread_crumbs[array[index]] = true;
//         }
//     }
//     return Object.keys(bread_crumbs).sort((a, b) => a - b);
// }

/**
 * Solution
 */
const unique_sort = function (array) {
    const bread_crumbs = {}
    const result = []

    for (let index = 0; index < array.length; index++) {
        if (!bread_crumbs[array[index]]) {
            result.push(array[index])
            bread_crumbs[array[index]] = true
        }
    }
    return result.sort((a, b) => a - b)
}

// console.log(unique_sort([1, 5, 2, 1]))
console.log(unique_sort([4, 2, 2, 3, 2, 2, 2]))