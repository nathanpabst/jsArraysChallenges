// 
//********CHALLENGE-2*************/
// 
//********CHALLENGE-3*************/
//Given an array of more than 3 numbers where all numbers are equal except for one. Display the one unique number!

// var challengeThreeInputA = [ 1, 1, 1, 2, 1, 1 ];  // 2
// var challengeThreeInputB = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];  // 0.55

// var uniqueNum = Math.max.apply(Math, challengeThreeInputA);
// document.getElementById("challenge-3").innerHTML = '<h2>' + uniqueNum + '</h2>';
// console.log(uniqueNum);

//************CHALLENGE 4*********/
//Given an array of any number of integers display the array with each value doubled.

var challengeFourInputA = [ 1, 2, 3 ];  // [2, 4, 6]
var challengeFourInputB = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]
var challenge4Array = "";
for (var i = 0; i < challengeFourInputB.length; i++){
    challengeFourInputB[i] = challengeFourInputB[i] * 2;
}
//console.log(challengeFourInputB);
document.getElementById("challenge-4").innerHTML = '<h2>' + challengeFourInputB.join(', ') + '</h2>';
