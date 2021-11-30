class Range{

    constructor(from, to){
        this.from = from
        this.to = to
    }

    includes(x){ return (x>=this.from && x<=this.to)}

    toString(){
        return "(" + this.from.toString() + "..." + this.to.toString() + ")"
    }

    static parse(s){
        const regex = Range.integerRangePattern
        if (regex.test(s)) {
            const result = s.match(regex)
            return new Range(result[1],result[2])
        }else{
            return Error("La chaîne n'est pas valide.")
        }
    }

    static integerRangePattern = /^\((-?\d+)...(-?\d+)\)$/
}
// Test Range
const ran = new Range(2,7)
const str = ran.toString()
console.log(str)
const regex = str.match(Range.integerRangePattern)
//console.log(regex)
const test = Range.parse("(46...79)")
console.log(test.toString())

class Span extends Range{
    constructor(start, add){
        const a = start
        const b = start + add
        if (a < b) {
            super(a,b)
        } else {
            super(b,a)
        }
    }
}

const a = (new Span(2, 4)).toString(); // => "(2...6)"
console.log(a)
const b = (new Span(12, -8)).toString(); // => "(4...12)
console.log(b)