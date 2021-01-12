// My IF STATEMENT PROJECT (1)

const divinity = "Men are not immortal"
const men = "All men are mortal";
const socrateIsPartOfMen = true;
const thereforeSocrateIsMortal = false;

console.log(men);

if (men === divinity) {
	console.log("Then we can say socrate is an immortal God")
}
else if(socrateIsPartOfMen && !thereforeSocrateIsMortal) {
	console.log("Socrate is a man. Therefore, socrate  is mortal.");
}
else {
	console.log("We must all fear socrate, because he is a God");
}

// MY IF STATEMENT PROJECT (2)


const myCakes = "Vanilla or Chocolate";
const TheCakeIsNotChocolate = true;
const myFavCake = "Vanilla";

if (myCakes === myFavCake) {
	console.log("I need to pick randomly"); 
} else if((myCakes === myFavCake)  || (myFavCake && TheCakeIsNotChocolate)) {
	console.log("This cake is not Chocolate. Therefore, this Cake is Vanilla.");
} else{
	console.log("I need a Vanilla Cake from the Store")
}

