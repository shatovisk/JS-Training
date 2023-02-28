function topSalary(salaries){
    let maxSalary = 0;
    let workerWithMaxSalary;

    for (let [worker, salary] of Object.entries(salaries)){

        if (salary > maxSalary){
            maxSalary = salary;
            workerWithMaxSalary = worker;
        }
    }

    return workerWithMaxSalary;
}






let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


alert(topSalary(salaries))