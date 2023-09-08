function myPrimeList(limit) {
    let prime = [];
    let i = 2;
    let prime_length = 0;

    while (prime[prime_length] !== undefined) {
        prime_length++;
    }

    while (prime_length < limit) {
        if (isPrime(i)) {
            prime.push(i);
        }
        i++;
    }
    return prime;
}