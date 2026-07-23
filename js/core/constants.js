/* ==========================================================
   HIRE OR DIE V30
   CONSTANTS.JS
   Global Constants
========================================================== */

"use strict";

/* ==========================================================
   GAME STATES
========================================================== */

const GAME_STATE = {

    LOADING: "loading",

    MENU: "menu",

    PLAYING: "playing",

    PAUSED: "paused",

    GAME_OVER: "game_over",

    VICTORY: "victory"

};


/* ==========================================================
   MAP IDs
========================================================== */

const MAPS = {

    CITY: 1,

    TECH_FORTRESS: 2,

    DARK_LAB: 3,

    SERVER_ROOM: 4,

    CLOUD_CITADEL: 5,

    APOCALYPSE_CORE: 6

};


/* ==========================================================
   ENEMY TYPES
========================================================== */

const ENEMY = {

    WALKER: "walker",

    RUNNER: "runner",

    TANK: "tank",

    HACKER: "hacker",

    DRONE: "drone",

    SPIDER: "spider",

    FIREWALL: "firewall",

    VIRUS: "virus"

};


/* ==========================================================
   BOSS TYPES
========================================================== */

const BOSSES = {

    RECRUITER: 1,

    TEAM_LEAD: 2,

    MANAGER: 3,

    ARCHITECT: 4,

    CTO: 5,

    AI_RECRUITER: 6,

    GOD_RECRUITER: 7

};


/* ==========================================================
   ITEM TYPES
========================================================== */

const ITEM = {

    WEAPON: "weapon",

    ARMOR: "armor",

    POTION: "potion",

    KEY: "key",

    GEM: "gem",

    QUEST: "quest"

};


/* ==========================================================
   KEY TYPES
========================================================== */

const KEY = {

    BRONZE: "bronze",

    SILVER: "silver",

    GOLD: "gold",

    MASTER: "master"

};


/* ==========================================================
   WEAPON TYPES
========================================================== */

const WEAPON = {

    SWORD: "sword",

    GUN: "gun",

    SHOTGUN: "shotgun",

    LASER: "laser",

    FIREBALL: "fireball",

    LIGHTNING: "lightning"

};


/* ==========================================================
   PLAYER DIRECTIONS
========================================================== */

const DIRECTION = {

    UP: "up",

    DOWN: "down",

    LEFT: "left",

    RIGHT: "right"

};


/* ==========================================================
   SKILLS
========================================================== */

const SKILL = {

    DASH: "dash",

    SHIELD: "shield",

    FIREBALL: "fireball",

    HEAL: "heal",

    FREEZE: "freeze",

    LIGHTNING: "lightning",

    DOUBLE_DAMAGE: "double_damage"

};


/* ==========================================================
   QUESTION CATEGORIES
========================================================== */

const CATEGORY = {

    HTML: "html",

    CSS: "css",

    JAVASCRIPT: "javascript",

    REACT: "react",

    NODE: "node",

    EXPRESS: "express",

    MONGODB: "mongodb",

    SQL: "sql",

    DBMS: "dbms",

    OS: "os",

    CN: "cn",

    DSA: "dsa",

    CPP: "cpp",

    JAVA: "java",

    PYTHON: "python",

    OOPS: "oops",

    APTITUDE: "aptitude"

};


/* ==========================================================
   QUESTION DIFFICULTY
========================================================== */

const DIFFICULTY = {

    EASY: "easy",

    MEDIUM: "medium",

    HARD: "hard",

    EXPERT: "expert",

    NIGHTMARE: "nightmare"

};


/* ==========================================================
   NPC TYPES
========================================================== */

const NPC = {

    SHOPKEEPER: "shopkeeper",

    SCIENTIST: "scientist",

    SURVIVOR: "survivor",

    MENTOR: "mentor"

};


/* ==========================================================
   WEATHER TYPES
========================================================== */

const WEATHER = {

    CLEAR: "clear",

    RAIN: "rain",

    SNOW: "snow",

    FOG: "fog",

    STORM: "storm"

};


/* ==========================================================
   ACHIEVEMENTS
========================================================== */

const ACHIEVEMENT = {

    FIRST_KILL: "first_kill",

    ZOMBIE_SLAYER: "zombie_slayer",

    BOSS_HUNTER: "boss_hunter",

    HTML_MASTER: "html_master",

    CSS_MASTER: "css_master",

    JS_MASTER: "js_master",

    DSA_LEGEND: "dsa_legend"

};


/* ==========================================================
   COLORS
========================================================== */

const COLOR = {

    RED: "#ff3b30",

    GREEN: "#34c759",

    BLUE: "#007aff",

    YELLOW: "#ffcc00",

    PURPLE: "#af52de",

    ORANGE: "#ff9500",

    WHITE: "#ffffff",

    BLACK: "#000000"

};


/* ==========================================================
   SYSTEM
========================================================== */

console.log("📚 CONSTANTS LOADED");
