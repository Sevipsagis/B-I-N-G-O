$(document).ready(() => {
    var inputBox = $(".inputBox");
    inputBox.on("click", function () {
        if (this.value == "") {
            let playerNumber = prompt("Enter your number");
            this.value = playerNumber;
        }
    });
});