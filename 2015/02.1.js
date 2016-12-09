// Use an online tool to turn the given csv input into json
// e.g the first 5 input values of the given 1000
var input = [
	{
		"values": "4x23x21"
	},
	{
		"values": "22x29x19"
	},
	{
		"values": "11x4x11"
	},
	{
		"values": "8x10x5"
	},
	{
		"values": "24x18x16"
	}
];

function getSqFeet(input){

	var results = [];

	var mapped = input.map(function(el){
		return el.values;
	});

	mapped.forEach(function(str){

		var arr = str.split('x');

		var side1 =	arr[0] * arr[1];
		var side2 =	arr[0] * arr[2];
		var side3 =	arr[1] * arr[2];

		var sides = [];

		sides.push(side1,side2,side3);
		
		var shortestSide = sides.reduce(function(a, b) {
			return Math.min(a,b);
		});

		var surfaceArrea = (side1 + side2 + side3) * 2;
	    var result = surfaceArrea + shortestSide

		results.push(result);		
	});

	var sum = results.reduce(function add(a, b) {
	    return a + b;
	});
    
	return sum;
}

getSqFeet(input);


		

