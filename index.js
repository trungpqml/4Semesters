const bubble_sort = require("./src/bubble_sort")

var nums = [10, 5, 3, 8, 13, 18, 29, 2, 6, 4, 7, 9, 1];

nums = bubble_sort(nums)
console.log(nums.join(" - "))