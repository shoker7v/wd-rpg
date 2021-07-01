const GAME = {
    width: 440,
    height: 300,
    
    // context: undefined,
    // zombie01: undefined,
    // pirate01: undefined,
    // sprites: {
    //     background: undefined,
    //     zombie01: undefined,
    //     pirate01: undefined
    // } 
};

// class gameObject = {
//     constructor(options) {
//         this.name = options.name,

//     }
// }

///////////////////
////   CLASSES ////
///////////////////

class GameObject {
    constructor(type, imageUrl, imageX, imageY, regionWIdth, regionHeight, positionX, positionY, sizeX, sizeY){
        this.type = type,
        this.image = new Image(),
        this.image.src = imageUrl,
        this.imageX = imageX,
        this.imageY = imageY,
        this.regionWIdth = regionWIdth,
        this.regionHeight = regionHeight,
        this.sizeX = sizeX,
        this.sizeY = sizeY,
        this.positionX = positionX,
        this.positionY = positionY
    }
    move = function(){
        console.log("Move like a CHARACTER");
    }
    get getPositionX(){
        return this.positionX;
    }
    get getPositionY(){
        return this.positionY;
    }
}

class Character extends GameObject {
    constructor(type, imageUrl, imageX, imageY, regionWIdth, regionHeight, positionX, positionY, sizeX, sizeY){
        super(type, imageUrl, imageX, imageY, regionWIdth, regionHeight, positionX, positionY, sizeX, sizeY);
        // this.type = type,
        // this.image = new Image(),
        // this.image.src = imageUrl,
        // this.imageX = imageX,
        // this.imageY = imageY,
        // this.regionWIdth = regionWIdth,
        // this.regionHeight = regionHeight,
        // this.sizeX = sizeX,
        // this.sizeY = sizeY,
        // this.positionX = positionX,
        // this.positionY = positionY,
        this.isAlive = Boolean,
        this.stats = {
            level: undefined,
            expirience: undefined,
            expirienceToNextLevel: undefined,
            maxHealth: undefined,
            currentHealth: undefined,
            healthRegeneration: undefined,
            maxMana: undefined,
            currentMana: undefined,
            manaRegeneration: undefined,
            armor: undefined,
            attackTimer: 0,
            attackPeriod: undefined,
            attackRange: undefined,
            attackDamage: undefined,
            speed: undefined
        }
        this.equipment = {
            weapon: undefined,
            armor: undefined
        }
        this.money,
        this.inventory = []  
            
    }
    takeDamage(amount){
        this.stats.currentHealth -= amount;
        if (this.stats.currentHealth <= 0){
            this.stats.currentHealth = 0;
            this.isAlive = false;
        }
    }

    
}
// "player", "image/pirate01/idle01.png", 0, 0, 869, 853, 20, 80, 130, 150
class Player extends Character {
    constructor(type, imageUrl, imageX, imageY, regionWIdth, regionHeight, positionX, positionY, sizeX, sizeY){
        super(type, imageUrl, imageX, imageY, regionWIdth, regionHeight, positionX, positionY, sizeX, sizeY);
        this.money = 2000;
        this.isAlive = true,
        this.stats = {
            level: undefined,
            expirience: undefined,
            expirienceToNextLevel: undefined,
            maxHealth: 1000,
            currentHealth: 700,
            healthRegeneration: undefined,
            maxMana: undefined,
            currentMana: undefined,
            manaRegeneration: undefined,
            armor: undefined,
            attackTimer: 0,
            attackPeriod: 800,
            attackRange: 60,
            attackDamage: 7,
            speed: 20
        }
        
    }
}

class Zombie extends Character {
    constructor(type, imageUrl, imageX, imageY, regionWIdth, regionHeight, positionX, positionY, sizeX, sizeY){
        super(type, imageUrl, imageX, imageY, regionWIdth, regionHeight, positionX, positionY, sizeX, sizeY);
        this.isAlive = true,
        this.stats = {
            level: undefined,
            expirience: undefined,
            expirienceToNextLevel: undefined,
            maxHealth: 100,
            currentHealth: 60,
            healthRegeneration: undefined,
            maxMana: undefined,
            currentMana: undefined,
            manaRegeneration: undefined,
            armor: undefined,
            attackTimer: 0,
            attackPeriod: 2000,
            attackRange: 5,
            attackDamage: 1,
            speed: 30
        }
    }
    //Override
    move = function(){
        this.positionX -= this.stats.speed * engine.deltaTime / 1000;
        console.log("Move like a ZOMBIE");
        console.log(this.positionX);
    }
}


// GAME.zombie01 = {
//     width: 222,
//     height: 372,
//     sizeX: 100,
//     sizeY: 150,
//     x: 220,
//     y: 80
// };

// GAME.pirate01 = {
//     width: 869,
//     height: 853,
//     sizeX: 130,
//     sizeY: 150,
//     x: 20,
//     y: 80
// };