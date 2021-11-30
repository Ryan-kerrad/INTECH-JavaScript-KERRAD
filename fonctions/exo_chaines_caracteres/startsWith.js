const str = "coucou la vie"
const start = "coucou"

function startsWith(str, start){
    const strTab = [...str];
    const startTab = [...start];
    for(i = 0; i < start.length; i++){
        if(strTab[i] != startTab[i]){
            return console.log(false)
        }
    }
    return console.log(true)
}

startsWith(str, start)