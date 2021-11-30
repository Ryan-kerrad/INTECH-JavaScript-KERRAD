const f = (x, y, z) => x * (y - z)

function partial(f, ...x){
    return function (...inargs){
        return f(...x,...inargs)
    }
}

const result = partial(f,2)
console.log(result(4,5))