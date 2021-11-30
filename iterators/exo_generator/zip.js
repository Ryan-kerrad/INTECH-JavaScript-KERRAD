function* zip(...iterables) {
    let iterators = iterables.map(iterable => iterable[Symbol.iterator]());
    let result = [];

    while(iterators.length) {
        iteratorsValues = iterators.map(iterator => iterator.next());
        iterators = iterators.filter((iterator, index) => !iteratorsValues[index].done);

        iteratorsValues.forEach((interatorValue, index) => {
            if(!iteratorsValues[index].done)
                result.push(interatorValue.value)
        });
    }

    yield* result;
}

console.log([...zip("abc", [1, 2, 3])]);
console.log([...zip("abcd", "1234", "+-=?")])