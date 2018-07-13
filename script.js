var numberArray = [];
var gameStatus = false;
for(let i=1; i<100; i++){numberArray.push(i);}
console.log(numberArray);
$(document).ready(() => {
    var inputBox = $(".inputBox");
    inputBox.on("click", function () {
        if (this.value == "") {
            let playerNumber = parseInt(prompt("Enter your number"));
            if(numberArray[playerNumber-1] != null){
                this.value = playerNumber;
                numberArray[playerNumber-1] = null;
                console.log(numberArray);
            }
            else{this.value = "";}
        }
        startGame();
    });
    function startGame(){
        let counter = 0;
        for(box of $(".inputBox")){
            console.log(box.value);
            if(box.value != ""){
                counter++;
            }
        }
        console.log(counter);
        if(counter == 25){
            var gameStatus = true;
        }
    }
});