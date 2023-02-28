function unique(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        if (!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }

    return newArr;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O