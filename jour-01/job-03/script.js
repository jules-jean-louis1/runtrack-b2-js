/*Faites une fonction myIsInString(). Cette fonction devra déterminer si une chaîne de caractère se trouve dans une autre
en retournant un booléen.*/

function myIsInString(haystack, needle) {
    let found = false;
    let length_haystack = 0;
    let length_needle = 0;

    while (haystack[length_haystack] != undefined) {
        length_haystack++;
    }
    while (needle[length_needle] != undefined) {
        length_needle++;
    }

    for (let i = 0; i < length_haystack; i++) {
        let match = true;
        for (let j = 0; j < length_needle; j++) {
            if (haystack[i + j] != needle[j]) {
                match = false;
                break;
            }
            if (match) {
                found = true;
                break;
            }
        }
    }
    return found;
}
console.log(myIsInString("hello world", "rld")); // Cela affichera true