function aclean(arr){
    let filter = new Set(arr);
    let count;

    for (let x = 0; x < arr.length - 1; x++){
        for (let y = x + 1; y < arr.length; y++){
            if (arr[x].length == arr[y].length){
                word1 = arr[x].toLowerCase();
                word2 = arr[y].toLowerCase();
                count = 0;
                
                for (let i = 0; i < arr[y].length; i++){
                    if (word2.includes(word1[i])){
                        count += 1;
                        continue;
                    } else {
                        break;
                    }
                }

                if (count == arr[y].length){
                    filter.delete(arr[y]);
                }
            }
        }
    }

    
    return Array.from(filter)
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"