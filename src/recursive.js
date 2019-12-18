// let wr = (msg = "-----------") => document.write(`<br>${msg}`);
let wr = (msg = "----------") => console.log(msg)

/**
 * Basic recursion
 */

function basicRecursion(max, current) {
    // Base case, when to stop the basicRecursion, otherwise we have stack overflow
    if (current > max) {
        return;
    }
    wr(current);
    basicRecursion(max, current + 1);
}

basicRecursion(5, 1);
wr();

/**
 * Fibonacci
 */

function fibonacci(n) {
    //  Base case
    if (n <= 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

for (let index = 1; index < 20; index++) {
    wr(`${index}: ${fibonacci(index)}`)
}

/*
 * Factorial function that computes a factorial recursively
 * n! = n(n-1)(n-2)(n-3)(n-4)...1
 * Call the function
 * factorial(1) = 1
 * factorial(2) = 2
 * factorial(3) = 6
 */

function factorial(n) {
    // Base case
    if (n < 2) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

wr(factorial(1))
wr(factorial(2))
wr(factorial(3))