function myUpperCase(string) {
    let result = "";
    let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','q','p','r','s','t','u','v','w','x','y','z'];
    let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','Q','P','R','S','T','U','V','W','X','Y','Z'];

    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            result += ' '; // Ajoute un espace si le caractère est un espace
        } else {
            for (let j = 0; j < lowerCase.length; j++) {
                if (string[i] === lowerCase[j]) {
                    result += upperCase[j];
                }
            }
        }
    }
    return result;
}

console.log(myUpperCase("hello world")); // Cela affichera "HELLO WORLD"
