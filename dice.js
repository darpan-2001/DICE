document.querySelector("button").addEventListener("click", function () {
        var randomNum = Math.floor(Math.random() * 6) + 1;
        console.log(randomNum);

        if (randomNum === 1) {
            document.querySelector("img").setAttribute("src", "dice1.png");
        }
        else if (randomNum === 2) {
            document.querySelector("img").setAttribute("src", "dice2.png");
        }
        else if (randomNum === 3) {
            document.querySelector("img").setAttribute("src", "dice3.png");
        }
        else if (randomNum === 4) {
            document.querySelector("img").setAttribute("src", "dice4.png");
        }
        else if (randomNum === 5) {
            document.querySelector("img").setAttribute("src", "dice5.png");
        }
        else {
            document.querySelector("img").setAttribute("src", "dice6.png");
        }
    });
