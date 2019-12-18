function bubble_sort(array) {
    // console.log("Before sorting: ");
    // console.log(array.join(" - "));
    // console.log("Sorting:")
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    // console.log("After sorting: ");
    // console.log(array.join(" - "));
    return array
}

module.exports = bubble_sort