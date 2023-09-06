function myNearZero(array){
let length_array = 0;
    while (array[length_array] !== undefined) {
        length_array++;
    }
    let near_zero = array[0];
    for (let i = 0; i < length_array; i++) {
        if (Math.abs(array[i]) < Math.abs(near_zero)) {
            near_zero = array[i];
        }
    }
    return near_zero;
}
console.log(myNearZero([8, -6, 2, 109, -20, 5])); // Cela affichera 2