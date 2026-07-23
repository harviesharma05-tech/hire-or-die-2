/* ==========================================================
   HIRE OR DIE V30
   DOORS.JS
========================================================== */

"use strict";

/* ==========================================================
   DOOR ARRAY
========================================================== */

let doors = [];

/* ==========================================================
   DOOR CLASS
========================================================== */

class Door{

    constructor(x,y,type="bronze"){

        this.x = x;
        this.y = y;

        this.width = 64;
        this.height = 96;

        this.type = type;

        this.locked = true;

        this.open = false;

        this.image = new Image();

        this.image.src =
        "assets/doors/" + type + "-door.png";

    }

}

/* ==========================================================
   CREATE DOOR
========================================================== */

function createDoor(x,y,type){

    const door = new Door(x,y,type);

    doors.push(door);

}

/* ==========================================================
   OPEN DOOR
========================================================== */

function openDoor(door){

    door.locked = false;

    door.open = true;

    createFloatingText(

        "Door Opened",

        door.x,

        door.y,

        "#00ff00"

    );

}

/* ==========================================================
   CHECK KEY
========================================================== */

function hasKey(type){

    return inventory.some(

        item =>

        item.type==="key"

        &&

        item.keyType===type

    );

}

/* ==========================================================
   UPDATE
========================================================== */

function updateDoors(){

    doors.forEach(function(door){

        if(

            isColliding(

                player,

                door

            )

        ){

            if(

                door.locked

            ){

                if(

                    hasKey(

                        door.type

                    )

                ){

                    openDoor(door);

                }

            }

        }

    });

}

/* ==========================================================
   RENDER
========================================================== */

function renderDoors(){

    doors.forEach(function(door){

        if(

            door.image.complete

        ){

            ctx.drawImage(

                door.image,

                door.x,

                door.y,

                door.width,

                door.height

            );

        }

        else{

            ctx.fillStyle =

            door.locked

            ?

            "#8B4513"

            :

            "#00ff00";

            ctx.fillRect(

                door.x,

                door.y,

                door.width,

                door.height

            );

        }

    });

}

/* ==========================================================
   INITIALIZE
========================================================== */

function initializeDoors(){

    createDoor(

        900,

        250,

        "bronze"

    );

}

console.log("🚪 Door System Loaded");
