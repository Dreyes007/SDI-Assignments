/*
Daniel Reyes
SDI 1209
Project 1
*/

//Initial variables
var name = "Wild horse";
var escName = "\"KnuckleHead friends\"";
var booVariable = true;
var gettoHorseRidingEquipment = 2;

console.log("My story is about a " + name);
console.log("I decided to take this horse for a ride with my " + escName);
console.log("The total number of gear that we had to ride this horse was " + gettoHorseRidingEquipment);
console.log("The fact that this horse did not know how to stop was " + booVariable);

if (name === "Wild horse"){
	if (booVariable === true) {
		console.log("Lets go for a ride!");
	} else {
		console.log("Aww! back to riding our bikes");
	};
} else {
	if (gettoHorseRidingEquipment !== 2){
		console.log("We need more and better gear to ride this horse");
	} else {
		console.log("2 pieces of gear would be good enough to go for a ride");
	};
}; 
	