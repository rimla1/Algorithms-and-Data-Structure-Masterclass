const reverseVowels = (s) => {
    let sArray = s.split('');

    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (!isVowel(sArray[i])) {
            i++;
        }

        if (!isVowel(sArray[j])) {
            j--;
        }

        if (isVowel(sArray[i]) && isVowel(sArray[j])) {
            let temp = sArray[i];
            sArray[i] = sArray[j];
            sArray[j] = temp;
            i++;
            j--;
        }
    }


    return sArray.join('');
};

const isVowel = (letter) => {
    return letter === 'a' || letter === 'A' ||
           letter === 'e' || letter === 'E' ||
           letter === 'i' || letter === 'I' ||
           letter === 'o' || letter === 'O' ||
           letter === 'u' || letter === 'U';
}