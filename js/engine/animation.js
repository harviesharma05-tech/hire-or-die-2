/* ==========================================================
   HIRE OR DIE V30
   ANIMATION.JS
========================================================== */

"use strict";

/* ==========================================================
   ANIMATION CLASS
========================================================== */

class Animation{

    constructor(image, frameWidth, frameHeight, frames, speed){

        this.image = image;

        this.frameWidth = frameWidth;

        this.frameHeight = frameHeight;

        this.totalFrames = frames;

        this.speed = speed;

        this.currentFrame = 0;

        this.timer = 0;

    }

}

/* ==========================================================
   UPDATE ANIMATION
========================================================== */

function updateAnimation(animation){

    animation.timer++;

    if(animation.timer >= animation.speed){

        animation.timer = 0;

        animation.currentFrame++;

        if(animation.currentFrame >= animation.totalFrames){

            animation.currentFrame = 0;

        }

    }

}

/* ==========================================================
   DRAW ANIMATION
========================================================== */

function drawAnimation(

    animation,

    x,

    y,

    width,

    height

){

    if(

        !animation ||

        !animation.image ||

        !animation.image.complete

    ){

        return;

    }

    ctx.drawImage(

        animation.image,

        animation.currentFrame *

        animation.frameWidth,

        0,

        animation.frameWidth,

        animation.frameHeight,

        x,

        y,

        width,

        height

    );

}

/* ==========================================================
   PLAYER ANIMATION
========================================================== */

function updatePlayerAnimation(){

    if(

        player &&

        player.animation

    ){

        updateAnimation(

            player.animation

        );

    }

}

/* ==========================================================
   ZOMBIE ANIMATION
========================================================== */

function updateZombieAnimations(){

    zombies.forEach(function(zombie){

        if(zombie.animation){

            updateAnimation(

                zombie.animation

            );

        }

    });

}

/* ==========================================================
   BOSS ANIMATION
========================================================== */

function updateBossAnimation(){

    if(

        currentBoss &&

        currentBoss.animation

    ){

        updateAnimation(

            currentBoss.animation

        );

    }

}

/* ==========================================================
   FLOATING TEXT
========================================================== */

let floatingTexts = [];

function createFloatingText(

    text,

    x,

    y,

    color="yellow"

){

    floatingTexts.push({

        text,

        x,

        y,

        alpha:1,

        color

    });

}

function updateFloatingTexts(){

    floatingTexts.forEach(function(text){

        text.y -= 1;

        text.alpha -= 0.02;

    });

    floatingTexts = floatingTexts.filter(

        text => text.alpha > 0

    );

}

function renderFloatingTexts(){

    floatingTexts.forEach(function(text){

        ctx.globalAlpha = text.alpha;

        ctx.fillStyle = text.color;

        ctx.font = "20px Arial";

        ctx.fillText(

            text.text,

            text.x,

            text.y

        );

    });

    ctx.globalAlpha = 1;

}

/* ==========================================================
   PARTICLES
========================================================== */

let particles = [];

function spawnParticle(

    x,

    y,

    color

){

    particles.push({

        x,

        y,

        vx:(Math.random()-0.5)*4,

        vy:(Math.random()-0.5)*4,

        size:5,

        alpha:1,

        color

    });

}

function updateParticles(){

    particles.forEach(function(p){

        p.x += p.vx;

        p.y += p.vy;

        p.alpha -= 0.03;

        p.size *= 0.98;

    });

    particles = particles.filter(

        p=>p.alpha>0

    );

}

function renderParticles(){

    particles.forEach(function(p){

        ctx.globalAlpha = p.alpha;

        ctx.fillStyle = p.color;

        ctx.beginPath();

        ctx.arc(

            p.x,

            p.y,

            p.size,

            0,

            Math.PI*2

        );

        ctx.fill();

    });

    ctx.globalAlpha = 1;

}

/* ==========================================================
   UPDATE ALL ANIMATIONS
========================================================== */

function updateAnimations(){

    updatePlayerAnimation();

    updateZombieAnimations();

    updateBossAnimation();

    updateFloatingTexts();

    updateParticles();

}

/* ==========================================================
   RENDER ALL ANIMATIONS
========================================================== */

function renderAnimations(){

    renderFloatingTexts();

    renderParticles();

}

/* ==========================================================
   SYSTEM READY
========================================================== */

console.log("🎞 Animation Engine Loaded");
