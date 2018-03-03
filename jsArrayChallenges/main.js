// 

var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];
var challengeTwoInputB = [12,13,14];
var challengeTwoInputC = [9,2,4,7,3];

var str = "";
for (var i = 0; i < challengeTwoInputA.length; i++){
    str = challengeTwoInputA[i].toString();
if(str.includes("3")){
    challengeTwoInputA[i] = 1 * (str.replace(/[3]/g, 7));
}else if (str.includes("7")) {
    challengeTwoInputA[i] = 1 * (str.replace(/[7]/g, 3));
}else{
    challengeTwoInputA[i] = 1 * str;
    }
}
document.getElementById("challenge-2").innerHTML = challengeTwoInputA;
// console.log(challengeTwoInputA);


