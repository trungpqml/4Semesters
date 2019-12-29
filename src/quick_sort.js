const quick_sort = (nums) => {
    if (nums.length === 1) {
        return nums
    }
    const pivot = nums[nums.length - 1]
    const left = []
    const right = []
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return [...quick_sort(left), pivot, ...quick_sort(right)]
}

module.exports = quick_sort