/* ==========================================================
   HIRE OR DIE V30
   PHYSICS.JS
========================================================== */

"use strict";

/* ==========================================================
   GRAVITY
========================================================== */

const Physics = {

    gravity: 0,

    friction: 0.85,

    maxVelocity: 8

};


/* ==========================================================
   APPLY FRICTION
========================================================== */

function applyFriction(entity){

    if(entity.vx !== undefined){

        entity.vx *= Physics.friction;

    }

    if(entity.vy !== undefined){

        entity.vy *= Physics.friction;

    }

}


/* ==========================================================
   APPLY VELOCITY
========================================================== */

function applyVelocity(entity){

    if(entity.vx === undefined){

        entity.vx = 0;

    }

    if(entity.vy === undefined){

        entity.vy = 0;

    }

    entity.x += entity.vx;

    entity.y += entity.vy;

}


/* ==========================================================
   LIMIT SPEED
========================================================== */

function limitSpeed(entity){

    entity.vx = Math.max(

        -Physics.maxVelocity,

        Math.min(

            Physics.maxVelocity,

            entity.vx

        )

    );

    entity.vy = Math.max(

        -Physics.maxVelocity,

        Math.min(

            Physics.maxVelocity,

            entity.vy

        )

    );

}


/* ==========================================================
   KNOCKBACK
========================================================== */

function applyKnockback(entity,angle,power){

    entity.vx += Math.cos(angle) * power;

    entity.vy += Math.sin(angle) * power;

}


/* ==========================================================
   KEEP INSIDE MAP
========================================================== */

function keepInsideWorld(entity){

    if(entity.x < 0){

        entity.x = 0;

    }

    if(entity.y < 0){

        entity.y = 0;

    }

    if(entity.x + entity.width > GAME.WIDTH){

        entity.x = GAME.WIDTH - entity.width;

    }

    if(entity.y + entity.height > GAME.HEIGHT){

        entity.y = GAME.HEIGHT - entity.height;

    }

}


/* ==========================================================
   PLAYER PHYSICS
========================================================== */

function updatePlayerPhysics(){

    if(!player){

        return;

    }

    applyFriction(player);

    limitSpeed(player);

    applyVelocity(player);

    keepInsideWorld(player);

}


/* ==========================================================
   ZOMBIE PHYSICS
========================================================== */

function updateZombiePhysics(){

    zombies.forEach(function(zombie){

        applyFriction(zombie);

        limitSpeed(zombie);

        applyVelocity(zombie);

        keepInsideWorld(zombie);

    });

}


/* ==========================================================
   BOSS PHYSICS
========================================================== */

function updateBossPhysics(){

    if(!currentBoss){

        return;

    }

    applyFriction(currentBoss);

    limitSpeed(currentBoss);

    applyVelocity(currentBoss);

    keepInsideWorld(currentBoss);

}


/* ==========================================================
   UPDATE
========================================================== */

function updatePhysics(){

    updatePlayerPhysics();

    updateZombiePhysics();

    updateBossPhysics();

}


/* ==========================================================
   SYSTEM READY
========================================================== */

console.log("⚙ Physics Engine Loaded");
