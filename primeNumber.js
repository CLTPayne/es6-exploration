// Challenge around algorithmic complexity
// Find the 10,000th prime number 
// Based on https://www.hackerrank.com/contests/projecteuler/challenges/euler007/problem

// Note - the times were taken running these functions in node v10.8.0

// Attempt 1: 
// Most basic idea (and trying to remember what a prime number is!)
const primeNumber = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return `${number} is not prime, it's divisible by ${i}`
        }
    }
    return `${number} is prime`
}

// console.log(primeNumber(540))

const findNthPrimeNumberViaArray = n => {
    const primeNumbers = []
    for (let i = 2; primeNumbers.length < n; i++) {
        if (primeNumber(i) === `${i} is prime`) {
            primeNumbers.push(i)
        }
    }
    return primeNumbers[n - 1];
}

console.time('Array Calculation')
console.log(findNthPrimeNumberViaArray(10001))
console.timeEnd('Array Calculation')
// I thought this would be bad, but it works at least 
// Using node to time the process (as a measure of the algorithm's complexity)
// 104743 - answer
// Calculation: 1791.007ms

// Attempt 2:
// Idea to not hold 1001 numbers (tonnes of bytes) in memory
const findNthPrimeNumberViaVariableReassignment = n => {
    let primeNumberCounter = 0
    let nthPrimeNumber = null
    for (let i = 2; primeNumberCounter < n; i++) {
        if (primeNumber(i) === `${i} is prime`) {
            nthPrimeNumber = i;
            primeNumberCounter += 1;
        }
    }
    return nthPrimeNumber;
}

console.time('Variable Reassignment Calculation')
console.log(findNthPrimeNumberViaVariableReassignment(10001))
console.timeEnd('Variable Reassignment Calculation')
// 104743 - answer
// Calculation: 1989.874ms 
// I thought that this would be quicker as it doesn't have to keep track of the whole array! 
// Just reasign the slot in memory. Is that not how memory works. 

// Attempt 3:
// Refactor prime number calculator as outputting a string is wasteful?
const outputPrimeNumber = number => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return null
        }
    }
    return number
}

// console.log(outputPrimeNumber(11))

const findNthPrimeNumberViaSimplifiedPrimeNumberFunction = n => {
    const primeNumbers = []
    for (let i = 2; primeNumbers.length < n; i++) {
        if (outputPrimeNumber(i)) {
            primeNumbers.push(i)
        }
    }
    return primeNumbers[n - 1];
}

console.time('Simplified Prime Number Calculation')
console.log(findNthPrimeNumberViaVariableReassignment(10001))
console.timeEnd('Simplified Prime Number Calculation')
// 104743 - answer
// Calculation: 1878.348ms
// Took slightly longer than attempt 1 that also uses array
// Am I consfusing algorithmic complexity with javascript complexity
// Both will impact the amount of time to complete the computation

// Attempt 4:
// Idea to attempt a recursive function rather than for loops?
