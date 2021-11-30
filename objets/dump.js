function dump(item){
    let result = []
    if (item instanceof Array) {
        result.push("[")
        for (const element of item) {
            result.push(dump(element))
            result.push(",")
        }
        if (result[result.length-1] == ",") {result.pop()}
        result.push("]")
    } else if (item instanceof Object) {
        result.push("{")
        for (const key in item) {
            if (Object.hasOwnProperty.call(item, key)) {
                const element = item[key];
                result.push(key + ":" + dump(element))
                result.push(",")
            }
        }
        if (result[result.length-1] == ",") {result.pop()}
        result.push("}")
    } else if (typeof item == "string") {
        result.push('"' + item + '"')

    } else {
        result.push(item.toString())
    }
    return result.join("")
}
let obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.birthday = [1921, 6, 23];
const test = obj.birthday.toString()
console.log(test)
console.log(dump(obj)); // => {firstname:"Alan",lastname:"Turing",birthday:[1921,6,23]}
console.log("\"")