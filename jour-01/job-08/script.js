function myArraySort(array, sorting) {
    let index = 0;
    while (array[index] !== undefined) {
        index++;
    }

    for (let i = 0; i < index - 1; i++) {
        for (let j = 0; j < index - 1; j++) {
            if ((sorting === 'ASC' && array[j] > array[j + 1]) ||
                (sorting === 'DESC' && array[j] < array[j + 1])) {
                // Échangez les éléments si nécessaire pour trier
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Exemple d'utilisation de la fonction
let numbers = [5, 2, 9, 1, 5, 6];
console.log(myArraySort(numbers, 'ASC')); // Trie dans l'ordre croissant
console.log(myArraySort(numbers, 'DESC')); // Trie dans l'ordre décroissant
