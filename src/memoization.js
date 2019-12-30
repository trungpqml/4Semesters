/**
 * Function times10, that takes an argument n and multiples n times 10
 */

const times10 = (n) => (n * 10)

const cache = {}

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

console.log("~~~~~~~~~Task 2~~~~~~~~~")
console.log("Task calculated value:", memoTimes10(9))
console.log("Task 2 cache value", memoTimes10(9))