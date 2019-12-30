/**
 * Function times10, that takes an argument n and multiples n times 10
 */

const times10 = (n) => (n * 10)

const memoTimes10 = (n) => {
    if (n in cache) {
        console.log("Fetching from cache:", n)
        return cache[n]
    } else {
        console.log("Calculating result!")
        let result = times10(n)
        cache[n] = result
        return result
    }
}

// console.log("~~~~~~~~~Task 2~~~~~~~~~")
// console.log("Task calculated value:", memoTimes10(9))
// console.log("Task 2 cache value", memoTimes10(9))
const memoizedClosuredTimes10 = () => {
    const cache = {}
    // const memoTimes10 = (n) => {
    return (n) => {
        if (n in cache) {
            console.log("Fetching from cache:", n)
            return cache[n]
        } else {
            console.log("Calculating result!")
            let result = times10(n)
            cache[n] = result
            return result
        }
    }
    // return memoTimes10
}

const memoClosureTimes10 = memoizedClosuredTimes10()
console.log("~~~~~~ Task 3 ~~~~~~")
try {
    console.log("Task 3 calculated value:", memoClosureTimes10(9))
    console.log("Task 3 cached value:", memoClosureTimes10(9))
} catch (error) {
    console.error("Task 3:", error)
}