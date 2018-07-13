var numberArray = [];
var gameArray = [];
var gameTurn = 40;
var gameStatus = false;
for (let i = 1; i < 100; i++) { numberArray.push(i); gameArray.push(i); }
function restartGame() {
    location.reload();
}
$(document).ready(() => {
    var inputBox = $(".inputBox");
    inputBox.on("click", function () {
        if (this.value == "") {
            let playerNumber = parseInt(prompt("Enter your number"));
            if (numberArray[playerNumber - 1] != null) {
                this.value = playerNumber;
                numberArray[playerNumber - 1] = null;
            }
            else { this.value = ""; }
        }
        checkTostart();
    });
    $("#generateButton").on("click", function () {
        for (box of $(".inputBox")) {
            while (box.value == "") {
                let randNum = Math.floor(Math.random() * 98) + 1;
                if (numberArray[randNum - 1] != null) {
                    box.value = randNum;
                    numberArray[randNum - 1] = null;
                }
                else { this.value = ""; }
            }
        }
        // $("#generateButton").attr("disabled", true);
        generateButton.remove();
        checkTostart();
    });

    function checkTostart() {
        let counter = 0;
        for (box of $(".inputBox")) {
            if (box.value != "") {
                counter++;
            }
        }
        if (counter == 25 && gameStatus == false) {
            gameStatus = true;
            randomButton.classList.toggle("op-0");
        }
    }

    $("#randomButton").on("click", () => {
        if (gameTurn > 0 && gameStatus) {
            gameTurn--;
            while (true) {
                var randomNumber = Math.floor(Math.random() * 98) + 1;
                if (gameArray[randomNumber - 1] != null) {
                    gameArray[randomNumber - 1] = null;
                    break;
                }
            }
            gameTitle.innerHTML = `The Number is ${randomNumber}`;
            for (box of $(".inputBox")) {
                if (box.value == randomNumber) {
                    $(`#${box.id}`).attr("checked", true);
                }
            }
        }
        setTimeout(() => {
            gameStatus = checkWinCondition();
        }, 500);
        if(!gameStatus){$("#randomButton").attr("disabled", true);}
    })

    function checkWinCondition() {
        if (B1.checked && I1.checked && N1.checked && G1.checked && O1.checked ||
            B2.checked && I2.checked && N2.checked && G2.checked && O2.checked ||
            B3.checked && I3.checked && N3.checked && G3.checked && O3.checked ||
            B4.checked && I4.checked && N4.checked && G4.checked && O4.checked ||
            B5.checked && I5.checked && N5.checked && G5.checked && O5.checked ||
            B1.checked && B2.checked && B3.checked && B4.checked && B5.checked ||
            I1.checked && I2.checked && I3.checked && I4.checked && I5.checked ||
            N1.checked && N2.checked && N3.checked && N4.checked && N5.checked ||
            G1.checked && G2.checked && G3.checked && G4.checked && G5.checked ||
            O1.checked && O2.checked && O3.checked && O4.checked && O5.checked ||
            B1.checked && I2.checked && N3.checked && G4.checked && O5.checked ||
            B5.checked && I4.checked && N3.checked && G2.checked && O1.checked ||
            B1.checked && O1.checked && B5.checked && O5.checked ||
            I2.checked && N2.checked && G2.checked && I3.checked && G3.checked && I4.checked && N4.checked && G4.checked
        ) {
            gameTitle.innerHTML = `B I N G O !!!`;
            return false;
        }
        else if(gameTurn == 0){
            gameTitle.innerHTML = `- U N L U C K Y -`;
            return false;
        }
        else{
            return true;
        }
    }

});