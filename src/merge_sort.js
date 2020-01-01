// function merge(first_array, second_array) {
//     let i = 0,
//         j = 0;
//     merge_array = []
//     while (i < first_array.length && j < second_array.length) {
//         if (first_array[i] <= first_array[j]) {
//             merge_array.push(first_array[i]);
//             i += 1;
//         } else {
//             merge_array.push(second_array[j]);
//             j += 1;
//         }
//     }
//     while (i < first_array.length) {
//         merge_array.push(first_array[i]);
//         i += 1;
//     }
//     while (j < second_array.length) {
//         merge_array.push(second_array[j]);
//         j += 1;
//     }
//     return merge_array;
// }

// function merge_sort(array, starting, ending) {
//     if (starting === ending) {
//         return array
//     } else {
//         let split_point = Math.floor(starting + (ending - starting) / 2);
//         first_array = merge_sort(array, starting, split_point);
//         second_array = merge_sort(array, split_point, ending);
//         return merge(first_array, second_array);
//     }
// }

/**
 * Brian solution
 */

const stitch = (left, right) => {
    const results = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    return [...results, ...left, ...right]
}

const merge_sort = (nums) => {
    if (nums.length < 2) {
        return nums;
    }

    const length = nums.length
    const middle = Math.floor(length / 2)
    const left = nums.slice(0, middle)
    const right = nums.slice(middle, length)

    return stitch(merge_sort(left), merge_sort(right))
}

module.exports = merge_sort