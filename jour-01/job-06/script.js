function mySquareArray(array) {
let length_array = 0;
    while (array[length_array] !== undefined) {
        length_array++;
    }
    for (let i = 0; i < length_array; i++) {
        let num = +array[i];
        array[i] = num * num;
    }
    return array;
}
console.log(mySquareArray([3, 8, 4, 2, 5])); // Cela affichera [9, 64, 16, 4, 25]