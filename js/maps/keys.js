/* ==========================================================
   HIRE OR DIE V30
   KEYS.JS
========================================================== */

"use strict";

/* ==========================================================
   KEY ARRAY
========================================================== */

let keysOnMap = [];

/* ==========================================================
   KEY CLASS
========================================================== */

class Key{

    constructor(x,y,type="bronze"){

        this.x = x;
        this.y = y;

        this.width = 32;
        this.height = 32;

        this.type = "key";
        this.keyType = type;

        this.collected = false;

        this.image = new Image();

        this.image.src =
        "assets/keys/" + type + "-key.png";

        this.float = 0;

    }

}

/* ==========================================================
   CREATE KEY
========================================================== */

function createKey(x,y,type){

    keysOnMap.push(

        new Key(

            x,

            y,

            type

        )

    );

}

/* ==========================================================
   DROP KEY
========================================================== */

function dropKey(zombie){

    let chance = Math.random();

    let keyType = null;

    if(currentLevel <= 5){

        if(chance < 0.35){

            keyType = "bronze";

        }

    }

    else if(currentLevel <= 10){

        if(chance < 0.25){

            keyType = "silver";

        }

    }

    else{

        if(chance < 0.20){

            keyType = "gold";

        }

    }

    if(keyType){

        createKey(

            zombie.x,

            zombie.y,

            keyType

        );

    }

}

/* ==========================================================
   COLLECT KEY
========================================================== */

function collectKey(key){

    inventory.push({

        type:"key",

        keyType:key.keyType

    });

    key.collected = true;

    createFloatingText(

        key.keyType.toUpperCase() +

        " KEY",

        key.x,

        key.y,

        "#FFD700"

    );

    showNotification(

        "🔑 " +

        key.keyType +

        " key collected"

    );

}

/* ==========================================================
   UPDATE
========================================================== */

function updateKeys(){

    keysOnMap.forEach(function(key){

        key.float += 0.05;

        if(

            isColliding(

                player,

                key

            )

        ){

            collectKey(key);

        }

    });

    keysOnMap = keysOnMap.filter(

        key=>!key.collected

    );

}

/* ==========================================================
   RENDER
========================================================== */

function renderKeys(){

    keysOnMap.forEach(function(key){

        const offset =

            Math.sin(

                key.float

            ) * 4;

        if(

            key.image.complete

        ){

            ctx.drawImage(

                key.image,

                key.x,

                key.y + offset,

                key.width,

                key.height

            );

        }

        else{

            ctx.fillStyle =

            "#FFD700";

            ctx.beginPath();

            ctx.arc(

                key.x+16,

                key.y+16+offset,

                12,

                0,

                Math.PI*2

            );

            ctx.fill();

        }

    });

}

/* ==========================================================
   INITIALIZE
========================================================== */

function initializeKeys(){

    keysOnMap = [];

}

console.log("🔑 Key System Loaded");
