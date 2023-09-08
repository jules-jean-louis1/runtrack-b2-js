function myUpperCase(string) {
    let result = "";
    let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','q','p','r','s','t','u','v','w','x','y','z'];
    let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','Q','P','R','S','T','U','V','W','X','Y','Z'];
    let length_string1 = 0;
    let length_string2 = 0;

    while (string[length_string1] != undefined) {
        length_string1++;
    }
    while (lowerCase[length_string2] != undefined) {
        length_string2++;
    }
    for (let i = 0; i < length_string1; i++) {
        if (string[i] === ' ') {
            result += ' '; // Ajoute un espace si le caractère est un espace
        } else {
            for (let j = 0; j < length_string2; j++) {
                if (string[i] === lowerCase[j]) {
                    result += upperCase[j];
                }
            }
        }
    }
    return result;
}

console.log(myUpperCase("hello world")); // Cela affichera "HELLO WORLD"
