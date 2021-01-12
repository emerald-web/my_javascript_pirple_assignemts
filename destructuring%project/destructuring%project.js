//DIFFERENCE BETWEEN DESTRUCTURING AN ARRAY AND DESTRUCTURING AN OBJECT

/*
  - Destructuring an array is a javascript expression that
    makes it possible to extract data from array in to distinct
    variable and it can be used on ithe left-hand side of
    assignment.. it works with the square bracket.

    WHILE

  - Destructuring an array is a javascript expression that
    makes it possible to extract data from AN object in to distinct
    variable and it can be used on ithe left-hand side of
    assignment.. it works with the curly bracket.

*/

//CODE ON AN ARRAY DESTRUCTURING

function footballArray() {
	return ["Premeir League", "La Liga", "Seria A", "Ligue 1", "Bundus Liga"];	
};
//console.log(footballArray());
const[england, spain, italy, france, germany] = footballArray();
console.log(england);
console.log(germany, italy);
console.log(spain);

// CODE ON OBJECT DESTRUCTURING
const myInfo = { firstName: "Emmanuel", middleName: "Ikechukwu", lastName: "Okenwa", statue: "Student of pirple", course: "Javascript Course"};
const {firstName: fName, middleName: mName, lastName: lName, statue, course} = myInfo;
console.log(`My names are ${fName} ${mName} ${lName}, and i am a ${statue}, offering ${course}`);


/* 
  - destructuring of nested object and array can be define as a way of breaking down nested data in to different variable.
    it can also be done through the help of for of looping if the data is many...
*/

// EXAMPLE OF DESTRUCTURING NESTED ARRAY AND OBJECT

 const nigeriaStateInfo = {
  title: "State in nigeria",
  information: [
     {
      state: "Abuja",
      capital: "Federal Capital Terretory",
      location: "Northern part of nigeria",
     },
     {
      state: "Enugu",
      capital: "Enugu",
      location: "Eastern part of nigeria",
     },
     {
      state: "Lagos",
      capital: "Ikeja",
      location: "Western part of nigeria",
     },
     {
      state: "Delta",
      capital: "Asaba",
      location: "Southern part of nigeria",
     }
  ],
  Data: "Geopolitical Zones In Nigeria",
 }
 const {title, information} = nigeriaStateInfo;
 for (const {state, capital, location} of information) {
  console.log(`State: ${state}, Capital: ${capital}, Location: ${location}`);
 };
