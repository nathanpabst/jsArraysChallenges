var challengeOneInput = "jumbo shrimp";
var splitChallengeOneInput = 
challengeOneInput.split(" ");
var input1 = splitChallengeOneInput[0].split("");
var input2 = splitChallengeOneInput[1].split("");
var score1;
var score2;
var challengeOneElement = document.getElementById("challenge-1");

for (var i = 0; i < input1.length; i++){
    score1 += input1[i].charCodeAt();
};

for (var j = 0; j < input2.length; j++){
    score2 += input2[j].charCodeAt();
};

if(score1 > score2){
    challengeOneElement.innerHTML = ('<h1>' + input1.join("") + '</h1>');
}else {
    challengeOneElement.innerHTML = ('<h1>' + input2.join("") + '</h1>')
}

