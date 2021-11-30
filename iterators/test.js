const greeting = "coucou".toUpperCase(); 
const iterator = greeting[Symbol.iterator]();
let result = iterator.next();
let letters = [];

while (!result.done) {
	letters.push(result.value);
	result = iterator.next();
}

console.log(letters);