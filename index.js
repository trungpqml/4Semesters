const bubble_sort = require("./src/bubble_sort")
const insertion_sort = require("./src/insertion_sort")

var nums = [10, 5, 3, 8, 13, 18, 29, 2, 6, 4, 7, 9, 1];
console.log(`Before sorting: ${nums.join(" - ")}`)
// nums = bubble_sort(nums)
nums = insertion_sort(nums)
console.log(`After sorting: ${nums.join(" - ")}`)