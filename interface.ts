interface NamedItem {
	name: string;
}

function greet(item: namedItem) {
	console.log ('Hello, my name is ${item.name}!')
}

interface Animal {
	type: string;
	name: string;
	talk(): string;
	//
}

let bugsBunny: Animal = {
	type: 'bunny'
	name: 'Bugs Bunny',
	talk(): string {
		return "What's up doc?"
	}
}