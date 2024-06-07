
// Global Declaration
var hitnum = 0;
var timer = 60;
var score = 0;
var dtimer;

function startgame() {
    var stgme = document.createElement('button');
    stgme.id = "stgme";
    stgme.textContent = 'Start Game';
    document.querySelector(".pdwn").appendChild(stgme);
    stgme.addEventListener("click", function () {
        makebubble();
        hit();
        runtime();
    })

}

function makebubble() {
    var clutter = "";
    for (i = 1; i < 185; i++) {
        rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubu">${rn}</div>`;
    }

    document.querySelector(".pdwn").innerHTML = clutter;
}

function hit() {
    hitnum = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitnum;
}

function runtime() {
    dtimer = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(dtimer);
            document.querySelector(".pdwn").innerHTML = `<h3>Game over Your Score was :- ${score}</h3>`;
            Addrestartbtn();
        }
    }, 1000)
}

function scorefn() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function resetGame() {
    timer = 60;
    score = 0;
    document.querySelector("#timerval").textContent = timer;
    document.querySelector("#scoreval").textContent = score;
    document.querySelector("#hitval").textContent = 0;
    document.querySelector(".pdwn").innerHTML = "Game Cleared";
    makebubble();
    hit();
    runtime();
}

function Addrestartbtn() {
    var restartGame = document.createElement('button');
    restartGame.id = 'restartGame';
    restartGame.textContent = 'Try Again';
    document.querySelector(".pdwn").appendChild(restartGame);
    restartGame.addEventListener("click", function () {
        resetGame();
    })
}

document.querySelector(".pdwn").addEventListener("click", function (details) {
    var clickednum = (Number(details.target.textContent));
    if (clickednum === hitnum) {
        makebubble();
        hit();
        scorefn();
    }
})

// intialize the code 
startgame();