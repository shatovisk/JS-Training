function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key] !== 'string') {
            obj[key] *= 2
        } 
    }
}