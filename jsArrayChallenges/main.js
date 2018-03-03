// 
//********CHALLENGE-2*************/
// 
//********CHALLENGE-3*************/
//Given an array of more than 3 numbers where all numbers are equal except for one. Display the one unique number!


var challengeThreeInputA = [ 1, 1, 1, 2, 1, 1 ];  // 2
var challengeThreeInputB = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];  // 0.55

var uniqueNum = Math.max.apply(Math, challengeThreeInputA);
document.getElementById("challenge-3").innerHTML = '<h2>' + uniqueNum + '</h2>';
console.log(uniqueNum);
