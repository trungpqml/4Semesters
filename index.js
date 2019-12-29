const bubble_sort = require("./src/bubble_sort")
const insertion_sort = require("./src/insertion_sort")
const merge_sort = require("./src/merge_sort")
const quick_sort = require("./src/quick_sort")
const ArrayList = require("./src/array_list")
const LinkedList = require("./src/linked_list")
const BinarySearchTree = require("./src/binary_search_tree")
const AVL = require("./src/avl")

var nums = [10, 5, 3, 8, 13, 18, 29, 2, 6, 4, 7, 9, 1];
// var nums = [1, 2, 3, 4, 5]
// console.log(`Before sorting: ${nums.join(" - ")}`)

// nums = bubble_sort(nums)
// nums = insertion_sort(nums)
// nums = merge_sort(nums, 0, nums.length - 1)
// nums = quick_sort(nums)

// console.log(`After sorting: ${nums.join(" - ")}`)

// let array = new ArrayList()

// console.log(array.length)

// let linked_list = new LinkedList()
// console.log(linked_list.length)

// let tree = new BinarySearchTree()
// tree.add(1)

let tree = new AVL()

nums.map(item => tree.add(item))