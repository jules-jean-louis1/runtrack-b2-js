function myArraySum(array) {
    let sum = 0;
    let length_array = 0;
    while (array[length_array] !== undefined) {
        length_array++;
    }
    for (let i = 0; i < length_array; i++) {
        let num = +array[i];
        sum += num;
    }
    return sum;
}
console.log(myArraySum([4, 24, 52, 14, 32, 56])); // Cela affichera 182