
function restrict(target, keep){
    let properties = new Array()
    for (const prop in keep){
        properties.push(prop)
    }
    for (const prop in target) {
        var v = 1
        for (let i = 0; i < properties.length; i++) {
            if(prop.toString() == properties[i]){
                v = 0
            }
        }
        if (v) {
            delete target[prop]
        }
    }
    return target
}

const config = { user: "user", pass: "pass" };
const tooMuchConfig = { vars: "LOG=info", user: "user", pass: "pass", env: "prod" };
console.log("vars" in tooMuchConfig) // => true
console.log("env" in tooMuchConfig) // => true

const properConfig = restrict(tooMuchConfig, config);
console.log(properConfig === config) // => false
console.log("vars" in properConfig) // => false
console.log("env" in properConfig) // => false