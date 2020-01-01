function linear_search(array, item) {
    let index = -1
    // for (let index = 0; index < array.length; index++) {
    //     if (item === array[index]) {
    //         return true
    //     }
    // }
    array.forEach((element, i) => {
        if (element === item) {
            index = i
        }
    });
    return index
}

// console.log(linear_search([2, 6, 7, 90, 103], 90))
const binary_search = (array, item) => {
    let min = 0
    let max = array.length - 1
    let middle
    while (min <= max) {
        middle = Math.floor((max + min) / 2)
        console.log(`Min:${min} with Max:${max} and Middle:${middle}`)
        if (array[middle] === item) {
            console.log(`Found ${item} at ${middle}`)
            return middle
        } else {
            if (array[middle] < item) {
                console.log("Go to second half")
                min = middle + 1
            } else {
                console.log("Go to first half")
                max = middle - 1
            }
        }
    }
    return middle
}

// console.log(binary_search([2, 6, 7, 90, 103], 90))

const merge = (left, right) => {
    let result = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right]
}

const merge_sort = (array) => {
    if (array.length < 2) {
        return array
    }
    const length = array.length
    const middle = Math.floor(length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle, length)

    return merge(merge_sort(left), merge_sort(right))
}

// console.log(merge_sort([12, 30, 89, 45, 5, 3, 23, 11, 9, 2, 7]).join(" "))
// console.log(merge([3, 5], [1, 6]))

const recursive_binary_search = (array, item) => {
    let length = array.length
    let middle = Math.floor(length / 2)
    if (array[middle] === item) {
        return true
    } else {
        if (array[middle] > item) {
            array = array.slice(0, middle)
            return (array.length === 1 && array[0] != item) ? false : recursive_binary_search(array, item)
        } else {
            array = array.slice(middle, length)
            return (array.length === 1 && array[0] != item) ? false : recursive_binary_search(array, item)
        }
    }
}

// console.log(recursive_binary_search(merge_sort([12, 30, 89, 45, 5, 3, 23, 11, 9, 2, 7]), 10))
console.log(recursive_binary_search([2, 7, 9], 10))