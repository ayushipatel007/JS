let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    } 
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 200);
};

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 200);
};

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `level ${level}`;

    //randome button choosen
    let rdmIdx = Math.floor(Math.random() * 3);
    let rdmClr = btns[rdmIdx];
    let rdmBtn = document.querySelector(`.${rdmClr}`);
    gameSeq.push(rdmClr);
    console.log(gameSeq);
    gameFlash(rdmBtn);
};

function checkAns(idx) {
    // let idx = level - 1;

    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) { 
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `Game over! Your score was <u>${level}</u>. <br> Press any key to restart.`;
        document.querySelector("body").style.color = "red";
        setTimeout(function () {
            document.querySelector("body").style.color = "black";
        }, 150);
        highScore();
        reset();
    }
};

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor); 
    
    checkAns(userSeq.length - 1);
};

let allBtn = document.querySelectorAll(".btn");

for(btn of allBtn) {
    btn.addEventListener("click", btnPress)
};

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function highScore() {
    h4.innerHTML = `Your highest score is ${level}!`;
}

