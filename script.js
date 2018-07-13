var numberArray = [];
var gameStatus = false;
for(let i=1; i<100; i++){numberArray.push(i);}
function restartGame(){
    location.reload();
}
$(document).ready(() => {
    var inputBox = $(".inputBox");
    inputBox.on("click", function () {
        if (this.value == "") {
            let playerNumber = parseInt(prompt("Enter your number"));
            if(numberArray[playerNumber-1] != null){
                this.value = playerNumber;
                numberArray[playerNumber-1] = null;
            }
            else{this.value = "";}
        }
        checkTostart();
    });
    $("#generateButton").on("click", function(){
        for(box of $(".inputBox")){
            while(box.value == ""){
                let randNum = Math.floor(Math.random()*98)+1;
                if(numberArray[randNum-1] != null){
                    box.value = randNum;
                    numberArray[randNum-1] = null;
                }
                else{this.value = "";}
            }
        }
        $("#generateButton").attr("disabled", true);
        checkTostart();
    });

    function checkTostart(){
        let counter = 0;
        for(box of $(".inputBox")){
            console.log(box.value);
            if(box.value != ""){
                counter++;
            }
        }
        console.log(counter);
        if(counter == 25 && gameStatus == false){
            gameStatus = true;
            randomButton.classList.toggle("op-0");
        }
    }
});