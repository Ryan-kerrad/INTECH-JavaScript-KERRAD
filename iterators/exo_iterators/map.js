function map(iterable, f) {
    const iterator = iterable[Symbol.iterator]();
    let result = iterator.next();
    let letters = [];

    while (!result.done) {
	    letters.push(result.value);
	    result = iterator.next();
    }
    return {
        [Symbol.iterator]: function () {
            return {
                next() {
                    return f(iterator.next())
                }
            }
        }
    }
}

function getSequenceIterable(from, to) {
    return {
        [Symbol.iterator]: () => ({
            next() {
                return {
                    done: from > to,
                    value: from++,
                };
            }
        })
    };
}

const helloIterable = map("hello", v => v.toUpperCase());
const iterator = helloIterable[Symbol.iterator]();
const myIterable = getSequenceIterable(4, 8);
console.log(myIterable)