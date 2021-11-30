const str = "Harder, better, faster, stronger"

console.log(contains(str, "bet", 5))
console.log()
console.log(contains(str, "fast", 0))
console.log()
console.log(contains(str, "fast", 17))
console.log()
console.log(contains(str, "ert", 0))
console.log()
console.log(contains(str, "bet"))
console.log()
console.log(contains(str, "ert"))

function contains(haystack, needle, startIndex = 0){
    const l = haystack.length
    const len_needle = needle.length
    let boo = false
    let i = startIndex

    for (; i < l - len_needle; i++) {
        if (haystack[i] == needle[0]) {
            let k = 0
            for (;k < len_needle;k++) {
                if (needle[k] != haystack[i+k]) {
                    break
                }
            }
            if (k == len_needle) {
                return i 
            }
        }
    }
    return -1
}