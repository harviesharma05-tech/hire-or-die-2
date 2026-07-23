/* ==========================================================
   HIRE OR DIE V30
   TERMINAL.JS
========================================================== */

"use strict";

/* ==========================================================
   TERMINALS
========================================================== */

let terminals = [];

/* ==========================================================
   TERMINAL CLASS
========================================================== */

class CodingTerminal{

    constructor(x,y,level){

        this.x = x;
        this.y = y;

        this.width = 64;
        this.height = 64;

        this.level = level;

        this.active = false;

        this.completed = false;

        this.image = new Image();

        this.image.src =
        "assets/ui/terminal.png";

    }

}

/* ==========================================================
   CREATE TERMINAL
========================================================== */

function createTerminal(x,y,level){

    terminals.push(

        new CodingTerminal(

            x,

            y,

            level

        )

    );

}

/* ==========================================================
   UPDATE
========================================================== */

function updateTerminals(){

    terminals.forEach(function(terminal){

        if(

            terminal.completed

        ){

            return;

        }

        if(

            isColliding(

                player,

                terminal

            )

        ){

            if(

                keys["e"]

            ){

                terminal.active = true;

                showQuestion();

            }

        }

    });

}

/* ==========================================================
   COMPLETE
========================================================== */

function completeTerminal(){

    terminals.forEach(function(terminal){

        if(

            terminal.active

        ){

            terminal.completed = true;

            terminal.active = false;

        }

    });

}

/* ==========================================================
   RENDER
========================================================== */

function renderTerminals(){

    terminals.forEach(function(terminal){

        if(

            terminal.image.complete

        ){

            ctx.drawImage(

                terminal.image,

                terminal.x,

                terminal.y,

                terminal.width,

                terminal.height

            );

        }

        else{

            ctx.fillStyle="cyan";

            ctx.fillRect(

                terminal.x,

                terminal.y,

                terminal.width,

                terminal.height

            );

        }

        if(

            !terminal.completed

        ){

            ctx.fillStyle="white";

            ctx.font="16px Arial";

            ctx.fillText(

                "Press E",

                terminal.x-5,

                terminal.y-10

            );

        }

    });

}

/* ==========================================================
   INITIALIZE
========================================================== */

function initializeTerminals(){

    terminals=[];

}

console.log("💻 Coding Terminal Loaded");
