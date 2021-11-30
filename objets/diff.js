function diff(source, propertyNames){
    const {...obj} = source
    delete obj.a
    return obj
}

let o1 = { r: 0, g: 0, b: 0, a: 0 };
let withoutOpacity = { a: null };
let objectWithoutOpacity = diff(o1, withoutOpacity);
console.log(o1 === objectWithoutOpacity)
console.log(objectWithoutOpacity)