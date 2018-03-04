// 
//********CHALLENGE-2*************/

//********CHALLENGE-3*************/
//Given an array of more than 3 numbers where all numbers are equal except for one. Display the one unique number!

// var challengeThreeInputA = [ 1, 1, 1, 2, 1, 1 ];  // 2
// var challengeThreeInputB = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];  // 0.55

// var uniqueNum = Math.max.apply(Math, challengeThreeInputA);
// document.getElementById("challenge-3").innerHTML = '<h2>' + uniqueNum + '</h2>';
// console.log(uniqueNum);

//************CHALLENGE 4*********/
//Given an array of any number of integers display the array with each value doubled.

// var challengeFourInputA = [ 1, 2, 3 ];  // [2, 4, 6]
// var challengeFourInputB = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]
// var challenge4Array = "";
// for (var i = 0; i < challengeFourInputB.length; i++){
//     challengeFourInputB[i] = challengeFourInputB[i] * 2;
// }
// //console.log(challengeFourInputB);
// document.getElementById("challenge-4").innerHTML = '<h2>' + challengeFourInputB.join(', ') + '</h2>';

//***********CHALLENGE 5************/
//Given two arrays remove all values from array1 that are present in array2. Display the final results of array1

// var array1 = [1,2];
// var array2 = [1];
//display = [2]
var array1 = [1, 2, 4, 7, 5, 9];
var array2 = [5, 9, 2];
//display = [1, 4, 7]

for (var i = 0; i < array1.length; i++){
     for (var j = 0; j < array2.length; j++) {
       if (array1[i] === array2[j]){
            array1.splice(i, 1);
        }
     }
}
//console.log(array1);
document.getElementById("challenge-5").innerHTML = '<h2>' + array1.join(', ') + '</h2>';