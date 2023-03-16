function Obj(name) {
    this.name = name;
}


let obj = new Obj('John');
let obj2 = new obj.constructor('Pete');