/* ==========================================================
   HIRE OR DIE V30
   QUESTION MANAGER
========================================================== */

"use strict";

/* ==========================================================
   QUESTION DATABASE
========================================================== */

let questionDatabase = {};

let currentQuestion = null;

let questionAnswered = false;


/* ==========================================================
   LOAD ALL QUESTIONS
========================================================== */

async function loadQuestions(){

    const files = [

        "html",

        "css",

        "javascript",

        "react",

        "node",

        "sql",

        "dbms",

        "os",

        "dsa",

        "aptitude"

    ];

    for(const file of files){

        try{

            const response = await fetch(

                "questions/" +

                file +

                ".json"

            );

            questionDatabase[file] =

            await response.json();

        }

        catch(error){

            console.log(

                file +

                " not loaded"

            );

        }

    }

}


/* ==========================================================
   GET CATEGORY
========================================================== */

function getCategory(){

    if(currentLevel<=5){

        return Math.random()>0.5 ?

        "html" :

        "css";

    }

    if(currentLevel<=10){

        return "javascript";

    }

    if(currentLevel<=15){

        return Math.random()>0.5 ?

        "react" :

        "node";

    }

    if(currentLevel<=20){

        const arr=[

            "sql",

            "dbms",

            "os"

        ];

        return arr[

            Math.floor(

                Math.random()*arr.length

            )

        ];

    }

    if(currentLevel<=25){

        return "dsa";

    }

    return "aptitude";

}


/* ==========================================================
   RANDOM QUESTION
========================================================== */

function getRandomQuestion(){

    const category = getCategory();

    const list = questionDatabase[category];

    if(!list){

        return null;

    }

    currentQuestion =

    list[

        Math.floor(

            Math.random()*

            list.length

        )

    ];

    return currentQuestion;

}


/* ==========================================================
   SHOW QUESTION
========================================================== */

function showQuestion(){

    const q =

    getRandomQuestion();

    if(!q){

        return;

    }

    document.getElementById(

        "codingTerminal"

    ).classList.remove(

        "hidden"

    );

    document.getElementById(

        "terminalQuestion"

    ).innerHTML =

    q.question;

    const options =

    document.getElementById(

        "terminalOptions"

    );

    options.innerHTML = "";

    q.options.forEach(

        function(option,index){

            const btn =

            document.createElement(

                "button"

            );

            btn.innerText = option;

            btn.onclick=function(){

                answerQuestion(

                    index

                );

            };

            options.appendChild(

                btn

            );

        }

    );

}


/* ==========================================================
   ANSWER
========================================================== */

function answerQuestion(answer){

    if(questionAnswered){

        return;

    }

    questionAnswered=true;

    if(

        answer===

        currentQuestion.answer

    ){

        correctAnswer();

    }

    else{

        wrongAnswer();

    }

}


/* ==========================================================
   CORRECT
========================================================== */

function correctAnswer(){

    playerXP += 20;

    playerCoins += 50;

    createFloatingText(

        "+20 XP"

    );

    showNotification(

        "✅ Correct!"

    );

    document.getElementById(

        "codingTerminal"

    ).classList.add(

        "hidden"

    );

}


/* ==========================================================
   WRONG
========================================================== */

function wrongAnswer(){

    playerTakeDamage(15);

    spawnZombie();

    spawnZombie();

    showNotification(

        "❌ Wrong Answer"

    );

}


/* ==========================================================
   RESET
========================================================== */

function resetQuestion(){

    questionAnswered=false;

}


/* ==========================================================
   SYSTEM
========================================================== */

loadQuestions();

console.log("💻 Question Manager Loaded");
