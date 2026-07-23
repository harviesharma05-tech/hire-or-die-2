/* ==========================================================
   HIRE OR DIE V30
   COLLISION.JS
========================================================== */

"use strict";

/* ==========================================================
   RECTANGLE COLLISION
========================================================== */

function isColliding(a, b){

    return (

        a.x < b.x + b.width &&

        a.x + a.width > b.x &&

        a.y < b.y + b.height &&

        a.y + a.height > b.y

    );

}

/* ==========================================================
   CIRCLE COLLISION
========================================================== */

function circleCollision(x1,y1,r1,x2,y2,r2){

    const dx = x1 - x2;

    const dy = y1 - y2;

    const distance = Math.sqrt(dx*dx + dy*dy);

    return distance <= r1 + r2;

}

/* ==========================================================
   PLAYER VS ZOMBIES
========================================================== */

function playerZombieCollision(){

    if(!player) return;

    zombies.forEach(function(zombie){

        if(isColliding(player,zombie)){

            playerTakeDamage(

                zombie.damage

            );

        }

    });

}

/* ==========================================================
   PLAYER VS BOSS
========================================================== */

function playerBossCollision(){

    if(!player || !currentBoss){

        return;

    }

    if(isColliding(player,currentBoss)){

        playerTakeDamage(

            currentBoss.damage

        );

    }

}

/* ==========================================================
   PLAYER VS DOORS
========================================================== */

function playerDoorCollision(){

    if(typeof doors==="undefined"){

        return;

    }

    doors.forEach(function(door){

        if(

            isColliding(player,door)

        ){

            if(

                door.locked

            ){

                player.x -= player.speed;

                player.y -= player.speed;

            }

        }

    });

}

/* ==========================================================
   PLAYER VS KEYS
========================================================== */

function playerKeyCollision(){

    if(typeof keysOnMap==="undefined"){

        return;

    }

    keysOnMap.forEach(function(key,index){

        if(

            isColliding(player,key)

        ){

            inventory.push(key);

            keysOnMap.splice(index,1);

            showNotification(

                "🔑 Key Collected"

            );

        }

    });

}

/* ==========================================================
   PLAYER VS CHESTS
========================================================== */

function playerChestCollision(){

    if(typeof chests==="undefined"){

        return;

    }

    chests.forEach(function(chest){

        if(

            isColliding(player,chest)

        ){

            chest.open = true;

        }

    });

}

/* ==========================================================
   BULLET VS ZOMBIES
========================================================== */

function bulletZombieCollision(){

    if(typeof bullets==="undefined"){

        return;

    }

    bullets.forEach(function(bullet){

        zombies.forEach(function(zombie){

            if(

                isColliding(

                    bullet,

                    zombie

                )

            ){

                zombie.hp -=

                bullet.damage;

                bullet.remove = true;

            }

        });

    });

}

/* ==========================================================
   BULLET VS BOSS
========================================================== */

function bulletBossCollision(){

    if(

        !currentBoss ||

        typeof bullets==="undefined"

    ){

        return;

    }

    bullets.forEach(function(bullet){

        if(

            isColliding(

                bullet,

                currentBoss

            )

        ){

            currentBoss.hp -=

            bullet.damage;

            bullet.remove = true;

        }

    });

}

/* ==========================================================
   REMOVE DEAD ZOMBIES
========================================================== */

function removeDeadZombies(){

    zombies = zombies.filter(

        zombie=>{

            if(zombie.hp<=0){

                killZombie(

                    zombie

                );

                return false;

            }

            return true;

        }

    );

}

/* ==========================================================
   REMOVE DEAD BOSS
========================================================== */

function removeDeadBoss(){

    if(

        currentBoss &&

        currentBoss.hp<=0

    ){

        killBoss();

    }

}

/* ==========================================================
   UPDATE COLLISIONS
========================================================== */

function updateCollisions(){

    playerZombieCollision();

    playerBossCollision();

    playerDoorCollision();

    playerKeyCollision();

    playerChestCollision();

    bulletZombieCollision();

    bulletBossCollision();

    removeDeadZombies();

    removeDeadBoss();

}

/* ==========================================================
   SYSTEM READY
========================================================== */

console.log("💥 Collision Engine Loaded");
