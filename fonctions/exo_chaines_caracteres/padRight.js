const str = "Coucou"
console.log(padRight("r",str,4))
console.log(padRight("r",str,6))
console.log(padRight("r",str,8))

function padZeros(str, quantity){ return padRight("0", str, quantity) }
const padSpaces = padRight.bind(null, " ")

function padRight(char, str, quantity) {
    const l = str.length

    if (l < quantity){
        for (let i = 0; i < quantity - l; i++) {
            str = str + char
        }
    }
    return str
}