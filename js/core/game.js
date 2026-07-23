/* ==========================================================
   HIRE OR DIE V30
   GAME.JS
   Core Game Engine
========================================================== */

"use strict";

/* ==========================================================
   GAME ENGINE
========================================================== */

const Game = {

    state: GAME_STATE.LOADING,

    initialized: false,

    frame: 0,

    deltaTime: 0,

    lastTime: 0

};


/* ==========================================================
   INITIALIZE GAME
========================================================== */

function initializeGame() {

    console.log("🎮 Initializing Game...");

    canvas = document.getElementById("gameCanvas");

    if (!canvas) {

        console.error("Canvas Not Found");

        return;

    }

    ctx = canvas.getContext("2d");

    canvas.width = GAME.WIDTH;

    canvas.height = GAME.HEIGHT;

    Game.initialized = true;

    Game.state = GAME_STATE.MENU;

    console.log("✅ Engine Ready");

}


/* ==========================================================
   START GAME
========================================================== */

function startGame() {

    if (!Game.initialized) {

        initializeGame();

    }

    gameRunning = true;

    gamePaused = false;

    gameOver = false;

    gameWon = false;

    Game.state = GAME_STATE.PLAYING;

    initializePlayer();

    initializeMap();

    initializeZombies();

    requestAnimationFrame(gameLoop);

}


/* ==========================================================
   PAUSE
========================================================== */

function pauseGame() {

    gamePaused = !gamePaused;

    Game.state =

        gamePaused

        ? GAME_STATE.PAUSED

        : GAME_STATE.PLAYING;

}


/* ==========================================================
   GAME LOOP
========================================================== */

function gameLoop(time) {

    if (!gameRunning) {

        return;

    }

    Game.deltaTime =

        (time - Game.lastTime) / 1000;

    Game.lastTime = time;

    update();

    render();

    Game.frame++;

    requestAnimationFrame(gameLoop);

}


/* ==========================================================
   UPDATE
========================================================== */

function update() {

    if (gamePaused) {

        return;

    }

    if (typeof updatePlayer === "function") {

        updatePlayer();

    }

    if (typeof updateZombies === "function") {

        updateZombies();

    }

    if (typeof updateBosses === "function") {

        updateBosses();

    }

    if (typeof updateMap === "function") {

        updateMap();

    }

    if (typeof updateInventory === "function") {

        updateInventory();

    }

    if (typeof updateHUD === "function") {

        updateHUD();

    }

}


/* ==========================================================
   RENDER
========================================================== */

function render() {

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

    if (typeof renderMap === "function") {

        renderMap();

    }

    if (typeof renderPlayer === "function") {

        renderPlayer();

    }

    if (typeof renderZombies === "function") {

        renderZombies();

    }

    if (typeof renderBosses === "function") {

        renderBosses();

    }

}


/* ==========================================================
   RESTART
========================================================== */

function restartGame() {

    zombies = [];

    currentBoss = null;

    bossesKilled = 0;

    zombiesKilled = 0;

    currentMap = 1;

    currentLevel = 1;

    playerXP = 0;

    playerCoins = 0;

    playerGems = 0;

    startGame();

}


/* ==========================================================
   EXIT
========================================================== */

function exitGame() {

    gameRunning = false;

    Game.state = GAME_STATE.MENU;

}


/* ==========================================================
   FPS
========================================================== */

function getFPS() {

    return Math.round(

        1 / Game.deltaTime

    );

}


/* ==========================================================
   CHANGE STATE
========================================================== */

function setGameState(state) {

    Game.state = state;

}


/* ==========================================================
   GET STATE
========================================================== */

function getGameState() {

    return Game.state;

}


/* ==========================================================
   WINDOW LOAD
========================================================== */

window.addEventListener(

    "load",

    initializeGame

);


/* ==========================================================
   SYSTEM READY
========================================================== */

console.log("🎮 GAME ENGINE LOADED");
