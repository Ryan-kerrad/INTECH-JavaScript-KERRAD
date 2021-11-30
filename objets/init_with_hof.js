function initWith(f) {
    return function(size, nb) {
        if(nb){
            return Array.apply(null, Array(size)).map((v, i) => f(i, nb))
        }else{
            return Array.apply(null, Array(size)).map((v, i) => f())
        }
    }
}

const initWithZeros = initWith(() => 0);
const initFrom = initWith(function (index, initial) { return initial + index; });

console.log(initWithZeros(3)); // [0, 0, 0]
console.log(initFrom(3, 42)); // [42, 43, 44]