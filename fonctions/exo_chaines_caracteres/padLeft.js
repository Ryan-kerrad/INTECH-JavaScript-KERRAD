const str = "Coucou"
console.log(str)

function padZeros(str, quantity){ return padLeft("0", str, quantity) }
const padSpaces = padLeft.bind(null, " ")


const test = padSpaces("Coucou",10)
console.log(test)


function padLeft(char, str, quantity) {
    const l = str.length

    if (l < quantity){
        for (let i = 0; i < quantity - l; i++) {
            str = char + str
        }
    }
    return str
}