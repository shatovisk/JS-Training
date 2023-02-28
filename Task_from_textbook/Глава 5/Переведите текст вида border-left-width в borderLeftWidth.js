function camelize(str){
    let arr = str.split('-');
    let newWord;
    let i = 1;

    for (let word of arr){
        
        if (arr[0] == word){
          continue;
        }
        
        newWord = word[0].toUpperCase() + word.slice(1)
        arr[i] = newWord;
        ++i;
    }

    return arr.join('')
}

alert(camelize("background-color"))