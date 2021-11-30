const str = "Harder, better, faster, stronger"
const ex = Split(str, ", ")

console.log(ex)

function Split(str, sep){
    const l = str.length
    let boo = false
    const lSep = sep.length
    let newElement = ""
    const array = []

    for (let i = 0; i < l; i++) {
        boo = false
        if (str[i] == sep[0]) {
            let k = 0
            for (;k < lSep;k++) {
                if (sep[k] != str[i+k]) {
                    continue
                }
            }
            if (k == lSep) {
                boo = true
            }
        }
        if (!boo) {
            newElement += str[i]
        }
        else{
            array.push(newElement)
            newElement = ""
            i += lSep - 1
        }
    }
    if (newElement != "") {
        array.push(newElement)
    }
    return array
}