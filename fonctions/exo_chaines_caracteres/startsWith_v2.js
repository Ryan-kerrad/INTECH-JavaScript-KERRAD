const str = "coucou la vie"
const start = "coucou"

console.log(startsWith(str,start))

function startsWith(str, start){
    return str.substr(0,start.length) == start
}