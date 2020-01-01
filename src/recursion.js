const loopNTimes = (n) => {
    console.log("n ===", n)
    if (n <= 1) {
        return "complete"
    }
    return loopNTimes(n - 1)
}

function factorial(num) {
    var result = 1
    for (let index = 2; index <= num; index++) {
        console.log(`Result = ${result} * ${index} (${result*index})`)
        result *= index
    }
    return result
}

function logNumbers(start, end) {
    console.log(`iteratively looping from ${start} until ${end}`)
    for (let index = start; index < end; index++) {
        console.log("Hitting index", index)
    }
}

function logNumberRecursively(start, end) {
    console.log(`Recursively looping from ${start} to ${end}`)

    function recurse(i) {
        console.log("hitting index", i)
        if (i < end) {
            recurse(i + 1)
        }
    }
    recurse(start)
}
// logNumbers(1, 2)
// logNumberRecursively(1, 5)
function wrapperFnLoop(start, end) {
    function recurse(i) {
        console.log(`Looping from ${start} to ${end}`)
        if (i < end) {
            recurse(i + 1)
        }
    }
    rescurse(start)
}

function memoFnLoop(i, end) {
    console.log(`Looping from ${i} to ${end}`)
    if (i < end) {
        memoFnLoop(i + 1, end)
    }
}

//Accumulator
function joinElement(array, joinString) {
    function recurse(index, resultSoFar) {
        resultSoFar += array[index]
        if (index === array.length - 1) {
            return resultSoFar
        } else {
            return recurse(index + 1, resultSoFar + joinString)
        }
    }
    return recurse(0, "")
}

// console.log(joinElement(['s', 'cr', 't cod', ':) :)'], 'e'))

function jointElementIterartive(array, joinString) {
    let result = ""
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result = (index === array.length - 1) ? (result + element) : (result + element + joinString)
    }
    return result
}

console.log(jointElementIterartive(['s', 'cr', 't cod', ' :) :)'], 'e'))