/* ==========================================================
   HIRE OR DIE V30
   CONFIG.JS
   Global Game Configuration
========================================================== */

"use strict";

/* ==========================================================
   GAME INFORMATION
========================================================== */

const GAME = {

    NAME: "HIRE OR DIE",

    VERSION: "30.0",

    AUTHOR: "Harvie Sharma",

    WIDTH: 1280,

    HEIGHT: 720,

    FPS: 60

};


/* ==========================================================
   PLAYER CONFIG
========================================================== */

const PLAYER_CONFIG = {

    START_HP: 100,

    MAX_HP: 100,

    START_MANA: 100,

    MAX_MANA: 100,

    START_LEVEL: 1,

    START_XP: 0,

    START_COINS: 0,

    START_GEMS: 0,

    SPEED: 5,

    DASH_SPEED: 10,

    ATTACK_DAMAGE: 20,

    CRITICAL_CHANCE: 15,

    CRITICAL_DAMAGE: 2

};


/* ==========================================================
   ZOMBIE CONFIG
========================================================== */

const ZOMBIE_CONFIG = {

    BASE_HP: 100,

    BASE_DAMAGE: 10,

    BASE_SPEED: 1.5,

    SPAWN_PER_LEVEL: 5,

    MAX_ZOMBIES: 100

};


/* ==========================================================
   BOSS CONFIG
========================================================== */

const BOSS_CONFIG = {

    BASE_HP: 500,

    BASE_DAMAGE: 40,

    SPEED: 2,

    REWARD_COINS: 500,

    REWARD_XP: 100

};


/* ==========================================================
   LEVEL CONFIG
========================================================== */

const LEVEL_CONFIG = {

    TOTAL_MAPS: 6,

    LEVELS_PER_MAP: 5,

    TOTAL_LEVELS: 30

};


/* ==========================================================
   QUESTION CONFIG
========================================================== */

const QUESTION_CONFIG = {

    QUESTIONS_PER_LEVEL: 10,

    BONUS_QUESTIONS: 2,

    TIME_LIMIT: 60,

    XP_REWARD: 10,

    COIN_REWARD: 20

};


/* ==========================================================
   INVENTORY CONFIG
========================================================== */

const INVENTORY_CONFIG = {

    MAX_SLOTS: 40,

    MAX_STACK: 99

};


/* ==========================================================
   SHOP CONFIG
========================================================== */

const SHOP_CONFIG = {

    HEALTH_POTION: 50,

    MANA_POTION: 50,

    BRONZE_KEY: 100,

    SILVER_KEY: 250,

    GOLD_KEY: 500

};


/* ==========================================================
   AUDIO CONFIG
========================================================== */

const AUDIO_CONFIG = {

    MASTER_VOLUME: 0.5,

    MUSIC_VOLUME: 0.5,

    EFFECT_VOLUME: 0.7

};


/* ==========================================================
   SAVE CONFIG
========================================================== */

const SAVE_CONFIG = {

    AUTO_SAVE_INTERVAL: 60000,

    MAX_SAVE_SLOTS: 3

};


/* ==========================================================
   WEATHER CONFIG
========================================================== */

const WEATHER_CONFIG = {

    ENABLE_RAIN: true,

    ENABLE_FOG: true,

    ENABLE_SNOW: true,

    ENABLE_DAY_NIGHT: true

};


/* ==========================================================
   AI CONFIG
========================================================== */

const AI_CONFIG = {

    ENABLE_AI_MENTOR: true,

    ENABLE_HINTS: true,

    ENABLE_ADAPTIVE_DIFFICULTY: true

};


/* ==========================================================
   DEBUG CONFIG
========================================================== */

const DEBUG = {

    SHOW_FPS: true,

    SHOW_HITBOX: false,

    GOD_MODE: false,

    UNLIMITED_MANA: false,

    NO_CLIP: false

};


/* ==========================================================
   SYSTEM LOADED
========================================================== */

console.log("⚙ CONFIG LOADED");
