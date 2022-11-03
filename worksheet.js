const characters = [
	{
		name: 'Luke Skywalker',
		height: 172,
		mass: 77,
		eye_color: 'blue',
		gender: 'male',
	},
	{
		name: 'Darth Vader',
		height: 202,
		mass: 136,
		eye_color: 'yellow',
		gender: 'male',
	},
	{
		name: 'Leia Organa',
		height: 150,
		mass: 49,
		eye_color: 'brown',
		gender: 'female',
	},
	{
		name: 'Anakin Skywalker',
		height: 188,
		mass: 84,
		eye_color: 'blue',
		gender: 'male',
	},
]

//***MAP***
//1. Get array of all names
let names = characters.map((character) => {
	return character.name
})
//console.log(names)
//2. Get array of all heights
let heights = characters.map((character) => {
	return character.height
})
//console.log(heights)
//3. Get array of objects with just name and height properties
let nameHeights = characters.map((character) => {
	return { name: character.name, height: character.height }
})
//console.log(nameHeights)
//4. Get array of all first names
let firstNames = characters.map((character) => {
	return character.name.split(' ')[0]
})
//console.log(firstNames)

//***REDUCE***
//1. Get total mass of all characters
let totalMass = characters.reduce((prev, curr) => {
	prev += curr.mass
	return prev
}, 0)
//2. Get total height of all characters
let totalHeight = characters.reduce((prev, curr) => {
	prev += curr.height
	return prev
}, 0)
//3. Get total number of characters by eye color
charByEyeColor = characters.reduce((prev, curr) => {
	let color = curr.eye_color
	if (!prev[color]) prev[color] = 1
	else prev[color]++
	return prev
}, {})
//4. Get total number of characters in all the character names
let totalCharacters = characters.reduce((prev, curr) => {
	prev += curr.name.length
	return prev
}, 0)

//***FILTER***
//1. Get characters with mass greater than 100
let massGreater100 = characters.filter((character) => character.mass > 100)
//2. Get characters with height less than 200
let heightLesser200 = characters.filter((character) => character.height < 200)
//3. Get all male characters
let maleCharacters = characters.filter(
	(character) => character.gender === 'male'
)
//4. Get all female characters
let femaleCharacters = characters.filter(
	(character) => character.gender === 'female'
)

//***SORT***
//1. Sort by mass
let sortByMass = characters.sort((a, b) => a.mass - b.mass)
//2. Sort by height
let sortByHeight = characters.sort((a, b) => a.height - b.height)
//3. Sort by name
let sortByName = characters.sort((a, b) => a.name.localeCompare(b.name))
//4. Sort by gender
let sortByGender = characters.sort((a, b) => a.gender.localeCompare(b.gender))

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
