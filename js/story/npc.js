/* ==========================================================
   HIRE OR DIE V30
   NPC.JS
========================================================== */

"use strict";

/* ==========================================================
   NPC ARRAY
========================================================== */

let npcs = [];

/* ==========================================================
   NPC CLASS
========================================================== */

class NPC{

    constructor(name,x,y,image,message){

        this.name = name;

        this.x = x;
        this.y = y;

        this.width = 64;
        this.height = 64;

        this.message = message;

        this.image = new Image();

        this.image.src = image;

        this.completed = false;

    }

}

/* ==========================================================
   CREATE NPC
========================================================== */

function createNPC(name,x,y,image,message){

    npcs.push(

        new NPC(

            name,

            x,

            y,

            image,

            message

        )

    );

}

/* ==========================================================
   UPDATE NPC
========================================================== */

function updateNPC(){

    npcs.forEach(function(npc){

        if(

            isColliding(

                player,

                npc

            )

        ){

            if(keys["e"]){

                talkToNPC(npc);

            }

        }

    });

}

/* ==========================================================
   TALK
========================================================== */

function talkToNPC(npc){

    const box =

    document.getElementById(

        "dialogBox"

    );

    if(!box){

        return;

    }

    document.getElementById(

        "dialogName"

    ).innerText =

    npc.name;

    document.getElementById(

        "dialogText"

    ).innerText =

    npc.message;

    box.classList.remove(

        "hidden"

    );

}

/* ==========================================================
   CLOSE
========================================================== */

function closeDialog(){

    const box =

    document.getElementById(

        "dialogBox"

    );

    if(box){

        box.classList.add(

            "hidden"

        );

    }

}

/* ==========================================================
   RENDER NPC
========================================================== */

function renderNPC(){

    npcs.forEach(function(npc){

        if(

            npc.image.complete

        ){

            ctx.drawImage(

                npc.image,

                npc.x,

                npc.y,

                npc.width,

                npc.height

            );

        }

        else{

            ctx.fillStyle =

            "#00BFFF";

            ctx.fillRect(

                npc.x,

                npc.y,

                npc.width,

                npc.height

            );

        }

        ctx.fillStyle =

        "white";

        ctx.font =

        "16px Arial";

        ctx.fillText(

            "Press E",

            npc.x-5,

            npc.y-10

        );

    });

}

/* ==========================================================
   INITIALIZE NPC
========================================================== */

function initializeNPC(){

    npcs = [];

    createNPC(

        "Professor",

        150,

        200,

        "assets/npc/professor.png",

        "Welcome Survivor. Kill the zombies and prove your coding skills."

    );

    createNPC(

        "Scientist",

        650,

        300,

        "assets/npc/scientist.png",

        "Find the Bronze Key to unlock the Coding Lab."

    );

    createNPC(

        "AI Mentor",

        1000,

        200,

        "assets/npc/mentor.png",

        "Every correct answer makes you stronger."

    );

}

console.log("👨 NPC System Loaded");
