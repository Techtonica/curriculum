# Algorithmic Math Problems

### Projected Time

About 2 hours

- 30 minutes for Lesson
- 30 minutes for Guided Practice
- 30 minutes for Independent Practice
- 30 minutes for Check for Understanding

### Prerequisites

- [Time Complexity](/runtime-complexity/runtime-complexity.md)
- Basic understanding of loops and arrays

### Motivation

Mathematics forms the foundation of computer science. While many programming tasks don't require advanced math, there is a class of problems that are fundamentally mathematical in nature. Understanding classical algorithmic math problems is crucial because they frequently appear in technical interviews, competitive programming, and cryptography.

For instance, prime number generation and factorization are the mathematical bedrock of modern public-key cryptography (like RSA), which secures almost all data transmitted over the internet!

### Objectives

**Participants will be able to:**

- Understand the importance of mathematical algorithms in computer science
- Implement and explain the Sieve of Eratosthenes for finding primes
- Implement and explain the Euclidean Algorithm for finding the Greatest Common Divisor (GCD)
- Implement efficient Primality Testing
- Compare the runtime complexity of naive vs. optimized mathematical algorithms

### Materials

- [Sieve of Eratosthenes - Video](https://www.youtube.com/watch?v=klcIklsWzrY)
- [Euclidean Algorithm - Video](https://www.youtube.com/watch?v=JUzYl1TYMcU)

## Lesson (30mins)

### 1. Primality Testing (Checking if a number is prime)

A prime number is a positive integer greater than 1 that has no positive divisors other than 1 and itself. The most basic algorithmic math problem is determining whether a given number $n$ is prime.

#### Naive Approach:
The simplest way is to check if $n$ is divisible by any integer from $2$ up to $n-1$.

#### Optimized Approach:
We only need to check divisors up to $\sqrt{n}$. Why? If $n$ is divisible by some number $p$, then $n = p \times q$. If both $p$ and $q$ were greater than $\sqrt{n}$, then $p \times q$ would be greater than $n$, which is impossible. Therefore, at least one factor must be less than or equal to $\sqrt{n}$.

<details><summary>Visual Walkthrough: Primality of 29</summary>

Let's check if 29 is prime using the optimized approach.
The square root of 29 is approximately 5.38. We only need to check integers up to 5.

```plaintext
Step 1: Check divisor 2.
29 % 2 = 1 (Not divisible)

Step 2: Check divisor 3.
29 % 3 = 2 (Not divisible)

Step 3: Check divisor 4.
(Optimization: We actually only need to check prime divisors, but checking up to 5 is fine)
29 % 4 = 1 (Not divisible)

Step 4: Check divisor 5.
29 % 5 = 4 (Not divisible)

Result: 29 is prime! We only performed 4 checks instead of 27 checks.
```
</details>

<details><summary>JavaScript Implementation</summary>

```javascript
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  
  // Eliminate multiples of 2 and 3 early
  if (n % 2 === 0 || n % 3 === 0) return false;
  
  // Check up to the square root of n
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  
  return true;
}
```
</details>

#### Time Complexity:
- **Naive case**: O(n)
- **Optimized case**: O(√n)

---

### 2. Sieve of Eratosthenes

When you need to find *all* prime numbers up to a certain limit $n$, checking each number individually using `isPrime` takes $O(n\sqrt{n})$ time. The **Sieve of Eratosthenes** is a highly efficient ancient algorithm that does this in a fraction of the time.

#### How it works:
1. Create a boolean array of size $n+1$, initializing all entries as `true` (assuming all are prime).
2. Set `array[0]` and `array[1]` to `false`.
3. Starting from $p = 2$, if `array[p]` is `true`, it is a prime. Mark all multiples of $p$ (i.e., $p^2, p^2+p, p^2+2p...$) as `false`.
4. Move to the next number and repeat until $p^2 > n$.

<details><summary>Visual Walkthrough: Primes up to 10</summary>

```plaintext
Initial Array (Indices 2 to 10):
[2: T, 3: T, 4: T, 5: T, 6: T, 7: T, 8: T, 9: T, 10: T]

Step 1: p = 2 (Prime). Mark multiples of 2 as False (4, 6, 8, 10)
[2: T, 3: T, 4: F, 5: T, 6: F, 7: T, 8: F, 9: T, 10: F]

Step 2: p = 3 (Prime). Mark multiples of 3 as False (9)
[2: T, 3: T, 4: F, 5: T, 6: F, 7: T, 8: F, 9: F, 10: F]

Step 3: p = 4 (Not prime, skip)
Step 4: p^2 > 10, stop!

Remaining True indices are our primes: [2, 3, 5, 7]
```
</details>

<details><summary>JavaScript Implementation</summary>

```javascript
function sieveOfEratosthenes(n) {
  // Initialize array with 'true', assuming all numbers are prime initially
  let primes = new Array(n + 1).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let p = 2; p * p <= n; p++) {
    // If primes[p] is not changed, then it is a prime
    if (primes[p] === true) {
      // Update all multiples of p
      for (let i = p * p; i <= n; i += p) {
        primes[i] = false;
      }
    }
  }

  // Collect all prime numbers
  let primeNumbers = [];
  for (let i = 2; i <= n; i++) {
    if (primes[i]) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}
```
</details>

#### Time Complexity:
- O(n log log n) - Extremely efficient for finding all primes in a range.

---

### 3. Euclidean Algorithm for GCD

The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both numbers without a remainder. The Euclidean algorithm is an efficient method for computing the GCD.

#### How it works:
The algorithm is based on the principle that the GCD of two numbers does not change if the larger number is replaced by its difference with the smaller number. Recursively, this is optimized using the modulo operator (`%`):
`GCD(a, b) = GCD(b, a % b)` until `b` becomes 0. The result is `a`.

<details><summary>Visual Walkthrough: GCD(48, 18)</summary>

```plaintext
Find GCD of a = 48, b = 18

Step 1: a = 48, b = 18
Is b == 0? No. 
Next call: GCD(18, 48 % 18) -> GCD(18, 12)

Step 2: a = 18, b = 12
Is b == 0? No.
Next call: GCD(12, 18 % 12) -> GCD(12, 6)

Step 3: a = 12, b = 6
Is b == 0? No.
Next call: GCD(6, 12 % 6) -> GCD(6, 0)

Step 4: a = 6, b = 0
Is b == 0? Yes! Return a (6).

The Greatest Common Divisor is 6.
```
</details>

<details><summary>JavaScript Implementation</summary>

```javascript
// Recursive approach
function gcdRecursive(a, b) {
  if (b === 0) {
    return a;
  }
  return gcdRecursive(b, a % b);
}

// Iterative approach
function gcdIterative(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
```
</details>

#### Time Complexity:
- O(log(min(a, b))) - Extremely fast.

## Guided Practice (30mins)

Let's work through some examples together:

<details><summary> Example 1: Least Common Multiple (LCM)</summary>

The Least Common Multiple (LCM) of two numbers is the smallest positive integer that is divisible by both. There is a mathematical relationship between GCD and LCM:
`LCM(a, b) = (a * b) / GCD(a, b)`

Implement a function that calculates the LCM using the GCD algorithm.

```javascript
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  // Your code here
}

// Test cases
console.log(lcm(15, 20)); // Should return 60
console.log(lcm(5, 7)); // Should return 35
```

#### Solution

```javascript
function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  // Use Math.abs to handle negative inputs correctly
  return Math.abs(a * b) / gcd(a, b);
}
```
</details>

## Independent Practice (30mins)

<details><summary> Challenge 1: Sum of Primes</summary>

Write a function that calculates the sum of all prime numbers up to a given limit `n`. Hint: Use the Sieve of Eratosthenes to gather the primes efficiently!

```javascript
function sumOfPrimes(n) {
  // Your code here
}

// Test cases
console.log(sumOfPrimes(10)); // Should return 17 (2+3+5+7)
console.log(sumOfPrimes(50)); // Should return 328
```
</details>

<details><summary> Challenge 2: Check if two numbers are Coprime</summary>

Two numbers are considered *coprime* (or mutually prime) if the only positive integer that divides both of them is 1. That is, their GCD is 1.

Write a function that returns `true` if `a` and `b` are coprime, and `false` otherwise.

```javascript
function isCoprime(a, b) {
  // Your code here
}

// Test cases
console.log(isCoprime(14, 15)); // Should return true
console.log(isCoprime(14, 21)); // Should return false (both divisible by 7)
```
</details>

## Check for Understanding (30mins)

1. Why do we only need to check up to the square root of $n$ when determining if a number is prime?
2. If you need to check if 1,000 different numbers are prime, would you use the `isPrime` function 1,000 times, or would you use the Sieve of Eratosthenes? Why?
3. What is the base case (stopping condition) for the recursive Euclidean Algorithm?
4. What is the time complexity of the Sieve of Eratosthenes compared to checking each number manually up to $n$?

## Additional Resources

- [VisuAlgo - Math Algorithms](https://visualgo.net/en)
- [GeeksForGeeks - Sieve of Eratosthenes](https://www.geeksforgeeks.org/sieve-of-eratosthenes/)
