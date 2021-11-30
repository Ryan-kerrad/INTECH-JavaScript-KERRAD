function filter(iterable, f) {
    let index = 0
    let len = iterable.length
    return { 
        next : function(){
            let result;
            for (;index < len; index++){
                if (f(iterable[index])) {
                    result = {value:iterable[index], done:false}
                    index++
                    return result
                }
            }
            return { value: -1, done: true }
        }
    }
}

const iterator = filter("hello", v => "aeiouy".includes(v));
console.log(iterator.next().value) // => "e"
console.log(iterator.next().value) // => "o"
console.log(iterator.next().done) // => true