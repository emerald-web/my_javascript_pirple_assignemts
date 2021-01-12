// My favourite song in string and numbers


var artist = "Juice WRLD";
var title = "Righteous";
var album = "Legends Never Die";
var genre = "World Music";
var recordLebel = "Grade A Productions/Interscope Records" ;
var yearOfRelease = 2020;
var durationInsec = 240;
var award = "Song Of The Year";

console.log(artist);
console.log(title);
console.log(album);
console.log(genre);
console.log(recordLebel);
console.log(yearOfRelease);
console.log(durationInsec);
console.log(award);


console.log("i am a legend!!!".toUpperCase());

// Booleans (the true or False Statement)

var recordLebel = "Grade A Productions/Interscope Records";
console.log(recordLebel === "Grade A Productions/Interscope Records");
console.log(award === yearOfRelease);
console.log(album === "Legends Never Die");

if (artist === "Juice WRLD") {
	console.log("He is my favourite artist");
}
else {
	console.log("He is not my favourite artist");
};

if (album === "Legends Die") {
	console.log("I am not a legend");
}
else {
	console.log("I AM A LEGEND");
};

// the following evaluate to true
console.log(Boolean(recordLebel));

// the following evaluate to false
var ILoveJuiceWRLD = "";
console.log(Boolean(ILoveJuiceWRLD));

// WORKING WITH OBJECT FOR MY FAVOURITE SONGS

var MyFavouriteSong = {
	artist: "Juice WRLD",
	title: "Righteous",
	album: "Legends Never Die",
	recordLebel: "Grade A Productions/Interscope Records",
	biography: {
		name: "Jarad Anthony Higgins",
		state: "Chicago, Illinois",
		country: "United states",
		born: "2 December 2019",
		died: "8 December 2019",
	},
	yearOfRelease: 2020,
	durationInsec: 240,
	award: "Song of The Year",

};
console.log(MyFavouriteSong);
console.log(MyFavouriteSong.award);
console.log(MyFavouriteSong.recordLebel);

// adding more object
MyFavouriteSong.genre = "World Music";
console.log(MyFavouriteSong);

// accessing the nested object
console.log(MyFavouriteSong.biography);
console.log(MyFavouriteSong.biography.died);

var hisBiography = MyFavouriteSong.biography.name;
console.log(hisBiography);


// constructor pattern for creating object and accessing them with different variables values 

function juiceWrld(artist, title, album, genre, recordLebel, yearOfRelease, durationInsec, award) {
	// body...
	this.artist = artist;
	this.title = title;
	this.album = album;
	this.genre = genre;
	this.recordLebel = recordLebel;
	this.yearOfRelease = yearOfRelease;
	this.durationInsec = durationInsec;
	this.award = award;
    this.favArtist = function() {
    	console.log("Artist: " + this.artist);
    };
    this.favSong = function() {
    	console.log("Album: " + this.title);
    };
    this.rating = function() {
    	console.log("Rating: " + this.title + " = 100%");
    };
};

var myFavSong = new juiceWrld("Juice WRLD", "Righteous", "Legends Never Die", "World Music", 
	"Grade A Productions/Interscope Records", 2020, 240, "Song of The Year");

console.log(myFavSong);
myFavSong.favArtist();
console.log(myFavSong.recordLebel);
myFavSong.favSong();


// creating another variable to access the same data in the defined object function

var mySecondFavSong = new juiceWrld("Juice WRLD", "Lucid Dreams", "Goodbye & Good Riddance", "World Music",
	"Juice WRLD Mixtape/ISR P&D", 2018, 180, "Best Single Of The Year");
 console.log(mySecondFavSong);
 mySecondFavSong.rating();
 console.log(mySecondFavSong.album);
 console.log(mySecondFavSong.award);
 mySecondFavSong.favSong();

 // Array
 // Setting up Array for my Best songs

 var mySongsArray = ["Righteous", "Legends", "Lucid Dreams", "All Girs Are The Same", "Fighting Demons"];
 console.log(mySongsArray);
 console.log(mySongsArray.length);

 // my favourite song
var myFavouriteSong1 = mySongsArray[1];
console.log(myFavouriteSong1);

// Adding more items to the list of my song
mySongsArray.push("Blood on My Jeans", "Can't Die", "Feeling");
console.log(mySongsArray);

// ohhhh it's only five that is required
// we need to remove three
mySongsArray.pop()
console.log(mySongsArray);

// we still have to remove more
var reduceMySongs = mySongsArray.pop();
console.log(mySongsArray);

// one more to go
mySongsArray.pop()
console.log(mySongsArray);

// Nesting of array [adding another songs to my song]
mySongsArray.push(["Blood on My Jeans", "Can't Die",
 "Feeling"]);
 console.log(mySongsArray);

 // accessing my nested array
 console.log(mySongsArray[5]);
 console.log(mySongsArray[5][2]);

 // Arranging the arrays
 var mySortedSongsArray = mySongsArray.sort();
 console.log(mySortedSongsArray);

 // from Z-A Arrangement
 mySortedSongsArray.reverse();
 console.log(mySortedSongsArray);

 // Concatinating tow arrays together
 var mySecondSongs = ["Conversations", "Stay High", 
 "Wishing Well"];
 var myThirdsongs = ["Mr Heartbreak", "Robbery", 
 "Bad Energy"];
var ConcatMySongs = mySongsArray.concat(mySecondSongs,
	myThirdsongs);
console.log(ConcatMySongs);

//Slicing out some song
var slicedsongs = ConcatMySongs.slice(4); 
console.log(slicedsongs);

var slicedsongs = ConcatMySongs.slice(4,8); 
console.log(slicedsongs);

//Turing Array in to a long string
var joinedSongs = mySecondSongs.join(" * ");
console.log(joinedSongs);

// I want to the last item on my array
var lastSong = ConcatMySongs.slice(ConcatMySongs.length -1);
console.log(lastSong);

/* @ PIPRLE.COM THANKS FOR THIS WONDERFUL PROJECT AND SINCERELY HOPE YOU ENJOYED THE GALLARY OF MY FAVOURITE SONG 
THANKS AND REMAIN BLESS 
                                         

                                                                                              YOUR STUDENT
                                                                                              EMMANUEL IKECHUKWU OKENWA */