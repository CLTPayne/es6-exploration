// Challenge around algorithmic complexity
// Find the 10,000th prime number 
// Based on https://www.hackerrank.com/contests/projecteuler/challenges/euler007/problem

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

// const findNthPrimeNumber = (n) => {
//     const primeNumbers = []
//     for (let i = 2; primeNumbers.length < n; i++) {
//         if (primeNumber(i) === `${i} is prime`) {
//             primeNumbers.push(i)
//         }
//     }
//     return primeNumbers[n - 1];
// }

// console.time('Calculation')
// console.log(findNthPrimeNumber(10001))
// console.timeEnd('Calculation')
// I thought this would be bad, but it works at least 
// Using node to time the process (as a measure of the algorithm's complexity)
// 104743 - answer
// Calculation: 1791.007ms

// Attempt 2:
// Idea to not hold 1001 numbers (tonnes of bytes) in memory
const findNthPrimeNumber = (n) => {
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

console.time('Calculation')
console.log(findNthPrimeNumber(10001))
console.timeEnd('Calculation')
// 104743 - answer
// Calculation: 1989.874ms 
// I thought that this would be quicker as it doesn't have to keep track of the whole array! 
// Just reasign the slot in memory. Is that not how memory works. 