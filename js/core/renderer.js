/* ==========================================================
   HIRE OR DIE V30
   RENDERER.JS
========================================================== */

"use strict";

/* ==========================================================
   IMAGE CACHE
========================================================== */

const Images = {};

/* ==========================================================
   LOAD IMAGE
========================================================== */

function loadImage(name, path){

    const img = new Image();

    img.src = path;

    Images[name] = img;

}

/* ==========================================================
   LOAD ALL ASSETS
========================================================== */

function loadAssets(){

    /* PLAYER */

    loadImage(
        "player",
        "assets/player/player.png"
    );

    /* ZOMBIES */

    loadImage(
        "walker",
        "assets/zombies/zombie1.png"
    );

    loadImage(
        "runner",
        "assets/zombies/fastZombie.png"
    );

    loadImage(
        "tank",
        "assets/zombies/tankZombie.png"
    );

    /* BOSSES */

    loadImage(
        "recruiter",
        "assets/bosses/recruiter.png"
    );

    loadImage(
        "cto",
        "assets/bosses/cto.png"
    );

    /* MAPS */

    loadImage(
        "city",
        "assets/maps/city.png"
    );

}

/* ==========================================================
   CLEAR SCREEN
========================================================== */

function clearScreen(){

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

}

/* ==========================================================
   DRAW IMAGE
========================================================== */

function drawImage(name,x,y,w,h){

    const img = Images[name];

    if(

        img &&

        img.complete

    ){

        ctx.drawImage(

            img,

            x,

            y,

            w,

            h

        );

    }

}

/* ==========================================================
   DRAW RECTANGLE
========================================================== */

function drawRect(x,y,w,h,color){

    ctx.fillStyle = color;

    ctx.fillRect(

        x,

        y,

        w,

        h

    );

}

/* ==========================================================
   DRAW CIRCLE
========================================================== */

function drawCircle(x,y,r,color){

    ctx.beginPath();

    ctx.arc(

        x,

        y,

        r,

        0,

        Math.PI*2

    );

    ctx.fillStyle = color;

    ctx.fill();

}

/* ==========================================================
   DRAW TEXT
========================================================== */

function drawText(text,x,y,size,color){

    ctx.fillStyle = color;

    ctx.font =

        size +

        "px Arial";

    ctx.fillText(

        text,

        x,

        y

    );

}

/* ==========================================================
   HP BAR
========================================================== */

function drawHealthBar(entity){

    const width = entity.width;

    const hpWidth =

        (entity.hp/entity.maxHP)

        * width;

    drawRect(

        entity.x,

        entity.y-10,

        width,

        5,

        "#222"

    );

    drawRect(

        entity.x,

        entity.y-10,

        hpWidth,

        5,

        "#00ff00"

    );

}

/* ==========================================================
   SHADOW
========================================================== */

function drawShadow(entity){

    ctx.beginPath();

    ctx.ellipse(

        entity.x +

        entity.width/2,

        entity.y +

        entity.height,

        entity.width/2,

        8,

        0,

        0,

        Math.PI*2

    );

    ctx.fillStyle =

        "rgba(0,0,0,0.3)";

    ctx.fill();

}

/* ==========================================================
   PLAYER
========================================================== */

function renderPlayer(){

    if(!player){

        return;

    }

    drawShadow(player);

    drawImage(

        "player",

        player.x,

        player.y,

        player.width,

        player.height

    );

    drawHealthBar(player);

}

/* ==========================================================
   ZOMBIES
========================================================== */

function renderZombies(){

    zombies.forEach(function(z){

        drawShadow(z);

        drawImage(

            "walker",

            z.x,

            z.y,

            z.width,

            z.height

        );

        drawHealthBar(z);

    });

}

/* ==========================================================
   BOSS
========================================================== */

function renderBoss(){

    if(!currentBoss){

        return;

    }

    drawShadow(currentBoss);

    drawImage(

        "recruiter",

        currentBoss.x,

        currentBoss.y,

        currentBoss.width,

        currentBoss.height

    );

    drawHealthBar(currentBoss);

}

/* ==========================================================
   HUD
========================================================== */

function renderHUD(){

    drawText(

        "Level : " +

        playerLevel,

        20,

        30,

        20,

        "white"

    );

    drawText(

        "Coins : " +

        playerCoins,

        20,

        60,

        20,

        "yellow"

    );

}

/* ==========================================================
   RENDER FRAME
========================================================== */

function renderFrame(){

    clearScreen();

    renderMap();

    renderPlayer();

    renderZombies();

    renderBoss();

    renderHUD();

}

/* ==========================================================
   START
========================================================== */

loadAssets();

console.log("🎨 Renderer Loaded");
