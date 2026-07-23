/* ==========================================================
   HIRE OR DIE V30
   CAMERA.JS
========================================================== */

"use strict";

/* ==========================================================
   CAMERA
========================================================== */

const Camera = {

    x: 0,

    y: 0,

    width: GAME.WIDTH,

    height: GAME.HEIGHT,

    zoom: 1,

    smoothness: 0.10

};


/* ==========================================================
   INITIALIZE
========================================================== */

function initializeCamera(){

    Camera.x = 0;

    Camera.y = 0;

}


/* ==========================================================
   FOLLOW PLAYER
========================================================== */

function updateCamera(){

    if(!player){

        return;

    }

    const targetX =

        player.x -

        canvas.width/2 +

        player.width/2;

    const targetY =

        player.y -

        canvas.height/2 +

        player.height/2;

    Camera.x +=

        (targetX - Camera.x)

        * Camera.smoothness;

    Camera.y +=

        (targetY - Camera.y)

        * Camera.smoothness;

}


/* ==========================================================
   APPLY CAMERA
========================================================== */

function beginCamera(){

    ctx.save();

    ctx.scale(

        Camera.zoom,

        Camera.zoom

    );

    ctx.translate(

        -Camera.x,

        -Camera.y

    );

}


/* ==========================================================
   RESET CAMERA
========================================================== */

function endCamera(){

    ctx.restore();

}


/* ==========================================================
   SHAKE EFFECT
========================================================== */

function cameraShake(power){

    Camera.x +=

        (Math.random()-0.5)

        * power;

    Camera.y +=

        (Math.random()-0.5)

        * power;

}


/* ==========================================================
   ZOOM
========================================================== */

function setZoom(value){

    Camera.zoom = value;

}


/* ==========================================================
   WORLD TO SCREEN
========================================================== */

function worldToScreen(x,y){

    return{

        x:x-Camera.x,

        y:y-Camera.y

    };

}


/* ==========================================================
   SCREEN TO WORLD
========================================================== */

function screenToWorld(x,y){

    return{

        x:x+Camera.x,

        y:y+Camera.y

    };

}


/* ==========================================================
   LIMIT CAMERA
========================================================== */

function clampCamera(mapWidth,mapHeight){

    Camera.x = Math.max(

        0,

        Math.min(

            Camera.x,

            mapWidth-canvas.width

        )

    );

    Camera.y = Math.max(

        0,

        Math.min(

            Camera.y,

            mapHeight-canvas.height

        )

    );

}


/* ==========================================================
   SYSTEM READY
========================================================== */

console.log("📷 Camera Loaded");
