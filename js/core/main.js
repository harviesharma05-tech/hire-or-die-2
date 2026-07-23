/* ==========================================================
   HIRE OR DIE V30
   MAIN.JS
   Main Controller
========================================================== */

"use strict";

/* ==========================================================
   INPUT
========================================================== */

const keys = {};

const mouse = {

    x: 0,

    y: 0,

    left: false

};


/* ==========================================================
   KEYBOARD EVENTS
========================================================== */

window.addEventListener("keydown", function(event){

    keys[event.key.toLowerCase()] = true;

});

window.addEventListener("keyup", function(event){

    keys[event.key.toLowerCase()] = false;

});


/* ==========================================================
   MOUSE EVENTS
========================================================== */

window.addEventListener("mousemove", function(event){

    if(!canvas) return;

    const rect = canvas.getBoundingClientRect();

    mouse.x = event.clientX - rect.left;

    mouse.y = event.clientY - rect.top;

});

window.addEventListener("mousedown", function(){

    mouse.left = true;

});

window.addEventListener("mouseup", function(){

    mouse.left = false;

});


/* ==========================================================
   BUTTON EVENTS
========================================================== */

window.addEventListener("load", function(){

    const startBtn = document.getElementById("startGameBtn");

    if(startBtn){

        startBtn.onclick = function(){

            document.getElementById("mainMenu").style.display = "none";

            startGame();

        };

    }

});


/* ==========================================================
   ESC MENU
========================================================== */

window.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

        pauseGame();

        const menu = document.getElementById("pauseMenu");

        if(menu){

            menu.classList.toggle("hidden");

        }

    }

});


/* ==========================================================
   GAME INPUT
========================================================== */

function processInput(){

    if(!player){

        return;

    }

    /* Movement */

    if(keys["w"]){

        player.y -= player.speed;

    }

    if(keys["s"]){

        player.y += player.speed;

    }

    if(keys["a"]){

        player.x -= player.speed;

    }

    if(keys["d"]){

        player.x += player.speed;

    }

    /* Dash */

    if(keys["shift"]){

        player.speed = PLAYER_CONFIG.DASH_SPEED;

    }

    else{

        player.speed = PLAYER_CONFIG.SPEED;

    }

}


/* ==========================================================
   UPDATE
========================================================== */

function updateMain(){

    processInput();

}


/* ==========================================================
   SCENE CHANGE
========================================================== */

function showPanel(id){

    document.querySelectorAll(

        ".panel"

    ).forEach(function(panel){

        panel.style.display = "none";

    });

    const target = document.getElementById(id);

    if(target){

        target.style.display = "block";

    }

}


/* ==========================================================
   NOTIFICATION
========================================================== */

function showNotification(text){

    const notify = document.getElementById(

        "notification"

    );

    if(!notify){

        return;

    }

    notify.innerText = text;

    notify.style.opacity = 1;

    setTimeout(function(){

        notify.style.opacity = 0;

    },2000);

}


/* ==========================================================
   LEVEL COMPLETE
========================================================== */

function levelCompleted(){

    showNotification(

        "LEVEL COMPLETE"

    );

}


/* ==========================================================
   GAME OVER
========================================================== */

function playerDied(){

    gameRunning = false;

    Game.state = GAME_STATE.GAME_OVER;

    document.getElementById(

        "gameOverScreen"

    ).classList.remove(

        "hidden"

    );

}


/* ==========================================================
   VICTORY
========================================================== */

function playerWon(){

    gameRunning = false;

    Game.state = GAME_STATE.VICTORY;

    document.getElementById(

        "victoryScreen"

    ).classList.remove(

        "hidden"

    );

}


/* ==========================================================
   DEBUG
========================================================== */

window.addEventListener(

    "keydown",

    function(event){

        if(event.key==="F3"){

            debugMode = !debugMode;

            console.log(

                "Debug :",

                debugMode

            );

        }

    }

);


/* ==========================================================
   MAIN UPDATE
========================================================== */

setInterval(function(){

    if(gameRunning){

        updateMain();

    }

},1000/GAME.FPS);


/* ==========================================================
   SYSTEM READY
========================================================== */

console.log("🧠 MAIN CONTROLLER LOADED");
