function insertion_sort(array) {
    let sorted_array = [array[0]];
    for (let i = 1; i < array.length; i++) {
        element = array[i];
        if (element >= sorted_array[sorted_array.length - 1]) {
            sorted_array.push(element);
            continue;
        } else {
            for (let j = 0; j < sorted_array.length; j++) {
                if (element <= sorted_array[j]) {
                    sorted_array.splice(j, 0, element)
                    break
                }
            }
        }
    }
    return sorted_array
}

module.exports = insertion_sort;