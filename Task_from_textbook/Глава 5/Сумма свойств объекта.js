function sumSalaries(salaries){
    let sum = 0;

    for (let val of Object.values(salaries)){
        sum += +val;
    }

    return sum;
}





let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) ); // 650