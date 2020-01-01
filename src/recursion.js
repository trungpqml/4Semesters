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

// console.log(jointElementIterartive(['s', 'cr', 't cod', ' :) :)'], 'e'))

const factorize = (n) => {
    if (n <= 1) {
        return 1
    } else {
        return n * factorize(n - 1)
    }
};

const memo_calculate = (cb) => {
    const cache = {}
    return execute = (n) => {
        if (n in cache) {
            console.log("Fetching from cache...")
            return cache[n]
        } else {
            console.log("Not calculated yet!")
            let result = cb(n)
            cache[n] = result
            return result
        }
    }
}

// const my_factor = memo_calculate(factorize)
// console.log(my_factor(70))
// console.log(my_factor(70))

const memoize = (fn) => {
    let cache = {}
    return (...args) => {
        let n = args[0]
        if (n in cache) {
            console.log("Fetching from cache", n)
            return cache[n]
        } else {
            console.log("Calculating result", n)
            let result = fn(n)
            cache[n] = result
            return result
        }
    }
}

const factorialize = memoize(
    (x) => {
        if (x === 0) {
            return 1
        } else {
            return x * factorialize(x - 1)
        }
    }
)

console.log(factorialize(5))
console.log(factorialize(5))