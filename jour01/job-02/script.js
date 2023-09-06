
function myCountChar(haystack, needle) {
    let count = 0;
    let length_haystack = 0;

    while (haystack[length_haystack] != undefined) {
        length_haystack++;
    }
    for (let i = 0; i < length_haystack; i++) {
        if (haystack[i] === needle) {
            count++;
        }
    }
    return count;
}

console.log(myCountChar("Hello world", "o")); // Cela affichera 3