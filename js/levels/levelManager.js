/* ==========================================================
   HIRE OR DIE V30
   LEVELMANAGER.JS
========================================================== */

"use strict";

/* ==========================================================
   LEVELS
========================================================== */

const Levels = [

/* ================= MAP 1 ================= */

{
map:1,
level:1,
name:"City Entrance",
difficulty:"Easy",

zombies:5,

doors:[
{x:1100,y:250,type:"bronze"}
],

keys:[
"bronze"
],

terminal:true,

category:"html",

boss:false,

reward:{
coins:100,
xp:50
}
},

{
map:1,
level:2,
name:"Abandoned Street",
difficulty:"Easy",

zombies:8,

doors:[
{x:1150,y:280,type:"bronze"}
],

keys:[
"bronze"
],

terminal:true,

category:"css",

boss:false,

reward:{
coins:150,
xp:70
}
},

{
map:1,
level:3,
name:"Metro Station",

difficulty:"Easy",

zombies:12,

doors:[
{x:1200,y:260,type:"silver"}
],

keys:[
"silver"
],

terminal:true,

category:"html",

boss:false,

reward:{
coins:200,
xp:100
}
},

{
map:1,
level:4,
name:"Destroyed Mall",

difficulty:"Medium",

zombies:15,

doors:[
{x:1250,y:280,type:"silver"}
],

keys:[
"silver"
],

terminal:true,

category:"css",

boss:false,

reward:{
coins:250,
xp:120
}
},

{
map:1,
level:5,

name:"Recruiter Arena",

difficulty:"Boss",

zombies:20,

doors:[],

keys:[],

terminal:true,

category:"html",

boss:true,

bossType:"Recruiter"

},

];


/* ==========================================================
   CURRENT LEVEL
========================================================== */

let currentMap = 1;

let currentLevel = 1;


/* ==========================================================
   GET LEVEL
========================================================== */

function getCurrentLevel(){

    return Levels.find(

        level=>

        level.map===currentMap &&

        level.level===currentLevel

    );

}


/* ==========================================================
   LOAD LEVEL
========================================================== */

function loadLevel(){

    const level = getCurrentLevel();

    if(!level){

        return;

    }

    zombies=[];

    doors=[];

    terminals=[];

    keysOnMap=[];

    initializeNPC();

    initializeKeys();

    initializeDoors();

    initializeTerminals();

    for(

        let i=0;

        i<level.zombies;

        i++

    ){

        spawnZombie();

    }

    if(level.terminal){

        createTerminal(

            700,

            300,

            level.level

        );

    }

    if(level.boss){

        spawnBoss(

            recruiterBoss

        );

    }

    document.getElementById(

        "levelName"

    ).innerText=

    level.name;

}


/* ==========================================================
   COMPLETE LEVEL
========================================================== */

function completeLevel(){

    const level = getCurrentLevel();

    playerCoins +=

    level.reward?.coins || 0;

    playerXP +=

    level.reward?.xp || 0;

    currentLevel++;

    if(currentLevel>5){

        currentMap++;

        currentLevel=1;

    }

    loadLevel();

}


/* ==========================================================
   START GAME
========================================================== */

function startCampaign(){

    currentMap=1;

    currentLevel=1;

    loadLevel();

}


/* ==========================================================
   SYSTEM
========================================================== */

console.log("🗺 Level Manager Loaded");
