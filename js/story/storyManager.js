/* ==========================================================
   HIRE OR DIE V30
   STORYMANAGER.JS
========================================================== */

"use strict";

/* ==========================================================
   STORY DATA
========================================================== */

const Story = {

    currentMission:0,

    missions:[

        {
            title:"Wake Up",

            npc:"Professor",

            text:"The world has fallen. Only programmers can save humanity."
        },

        {
            title:"Find The Bronze Key",

            npc:"Scientist",

            text:"Kill zombies and find the Bronze Key."
        },

        {
            title:"Open The Door",

            npc:"Scientist",

            text:"Unlock the Coding Lab."
        },

        {
            title:"Solve HTML Challenge",

            npc:"AI Mentor",

            text:"Answer correctly to unlock your first weapon."
        },

        {
            title:"Recruiter Boss",

            npc:"AI Mentor",

            text:"Defeat the Recruiter to reach Map 2."
        }

    ]

};

/* ==========================================================
   SHOW MISSION
========================================================== */

function showMission(){

    const mission=

    Story.missions[

        Story.currentMission

    ];

    if(!mission){

        return;

    }

    document.getElementById(

        "storyTitle"

    ).innerText=

    mission.title;

    document.getElementById(

        "storyNPC"

    ).innerText=

    mission.npc;

    document.getElementById(

        "storyText"

    ).innerText=

    mission.text;

}

/* ==========================================================
   NEXT MISSION
========================================================== */

function nextMission(){

    Story.currentMission++;

    if(

        Story.currentMission>=

        Story.missions.length

    ){

        Story.currentMission=

        Story.missions.length-1;

    }

    showMission();

}

/* ==========================================================
   START STORY
========================================================== */

function initializeStory(){

    Story.currentMission=0;

    showMission();

}

console.log("📖 Story Loaded");
