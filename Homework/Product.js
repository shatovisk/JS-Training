class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}




function checkInput(arr, str){
    let res = [];
    let flag;
    let strArr = str.split('&');
    let condition = strArr.map(item => item.split('-'));


    for (let i of arr){
        flag = true;

        for (let j = 0; j < condition.length - 1; j++){
            if (condition[j][0] == 'name'){
                if (condition[j][1] == 'contains'){
                    flag = i.name.includes(condition[j][2])
                }
                if (condition[j][1] == 'starts'){
                    flag = i.name.startsWith(condition[j][2])
                }
                if (condition[j][1] == 'ends'){
                    flag = i.name.ends(condition[j][2])
                } 
            }


            if (condition[j][0] == 'description'){
                if (condition[j][1] == 'contains'){
                    flag = i.description.includes(condition[j][2])
                }
                if (condition[j][1] == 'starts'){
                    flag = i.description.startsWith(condition[j][2])
                }
                if (condition[j][1] == 'ends'){
                    flag = i.description.ends(condition[j][2])
                } 
            }


            if (condition[j][0] == 'price'){
                if (condition[j][1].startsWith('>')){
                    flag = i.price > +condition[j][1].slice(1)
                }
                if (condition[j][1].startsWith('>=')){
                    flag = i.price >= +condition[j][1].slice(1)
                }
                if (condition[j][1].startsWith('<')){
                    flag = i.price < +condition[j][1].slice(1)
                }
                if (condition[j][1].startsWith('<=')){
                    flag = i.price <= +condition[j][1].slice(1)
                }
                if (condition[j][1].startsWith('=')){
                    flag = i.price == +condition[j][1].slice(1)
                }
            }
            
            
            if (condition[j][0] == 'quantity'){
                if (condition[j][1].startsWith('>')){
                    flag = i.quantity > +condition[j][1].slice(1)
                }
                if (condition[j][1].startsWith('>=')){
                    flag = i.quantity >= +condition[j][1].slice(1)
                }
                if (condition[j][1].startsWith('<')){
                    flag = i.quantity < +condition[j][1].slice(1)
                }
                if (condition[j][1].startsWith('<=')){
                    flag = i.quantity <= +condition[j][1].slice(1)
                }
                if (condition[j][1].startsWith('=')){
                    flag = i.quantity == +condition[j][1].slice(1)
                }
            }
        }


        if (flag){
            res.push(i);
        }
    }


    return res;
}

 
// метод  получает строку вида
const str = 'name-starts-fd&quantity=5'
// const str = 'name-contains-fd&price-=2&quantity->5&description-ends-abc';
 
// массив объектами такого класса.
const arr = [new Product("Gofd", 2, 6, "---abc"), new Product("Foofd", 2, 34, "Good abc"),
    new Product("fdMeat", 22, 5, "Good abc"), new Product("Soup", 23, 1, "Good abc"),
    new Product("Milk", 60, 4, "Good milk")
];
 
// На выходе возвращает массив, только с подходящими объектами
const newArr = checkInput(arr, str);

console.log(newArr);

