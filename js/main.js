var pokemonArray = ['pikachu', 'Squirtle', 'charmander']
// array length
console.log('length: ' + pokemonArray.length)
// individual array item length
// console.log(pokemonArray[0] + ' is ' + pokemonArray[0].length + ' characters')
// console.log(pokemonArray[1] + ' is ' + pokemonArray[1].length + ' characters')
// console.log(pokemonArray[2] + ' is ' + pokemonArray[2].length + ' characters')

for(var i = 0; i < pokemonArray.length; i++) {
	console.log(pokemonArray[i] + ' is ' + pokemonArray[i].length + ' characters')
}

var numVar = 12
console.log(numVar.length)
var boolVar = true
console.log(boolVar.length)
var objVar = { name : 'chris' }
console.log(objVar.name.length)


pokemonArray.reverse()
console.log(pokemonArray)

pokemonArray.reverse()
console.log(pokemonArray)

pokemonArray.sort()
console.log(pokemonArray)

var numArray = [9, 33, 87,140, 50]

console.log('sorted numerically: ' + numArray.sort(function(a, b) {
	return a - b
}))
console.log(numArray)


var stringArray = ['this', 'is', 'a', 'string', 'array']
// stringArray.sort()
// console.log(stringArray)


pokemonArray.push({name:'chris'})
console.log(pokemonArray)
stringArray.pop()
console.log(stringArray)


pokemonArray.unshift('meowth')
console.log(pokemonArray)

stringArray.shift()
console.log(stringArray)





