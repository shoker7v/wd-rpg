const MAIN = {
    load: function(){
        //Изображение надо загрузить, нарисовать, вывести на экран
        // this.sprites.background = new Image();
        // this.sprites.background.src = "image/background/background.png"; //Загрузка
        // this.sprites.zombie01 = new Image();
        // this.sprites.zombie01.src = "image/zombie01/Idle1.png";
        // this.sprites.pirate01 = new Image();
        // this.sprites.pirate01.src = "image/pirate01/idle01.png";
    },
    
    run: function(){
    //     this.render();
    //     console.log("render");
    //     window.requestAnimationFrame(function(){
    //         GAME.run();
    //     });
    }
}

CONTROLLER.a();


let allCharacters = [];
let allBackground = [];
let allGameObjects = [];
// let allInterface = [];



allGameObjects.push(allBackground);
allGameObjects.push(allCharacters);


const player = new Player("player", "image/pirate01/idle01.png", 0, 0, 869, 853, 30, 120, 130, 150);

allCharacters.push(player);
allCharacters.push(new Zombie("zombie", "image/zombie01/idleLeft1.png", 0, 0, 222, 372, 320, 100, 100, 150));
allCharacters.push(new Zombie("zombie", "image/zombie01/idleLeft1.png", 0, 0, 222, 372, 220, 80, 100, 150));
// allBackground.push(new GameObject("background", "image/background/background.png", 0, 0, 1920, 1080, 0, 0, 440, 300));
for (let character of allCharacters){
    console.log(character.positionY);
}

allCharacters.sort((a,b) => a.positionY - b.positionY);
for (let character of allCharacters){
    console.log(character.positionY);
}
// allCharacters.push(player);
// allCharacters.push(new Zombie("zombie", "image/zombie01/idleLeft1.png", 0, 0, 222, 372, 320, 80, 100, 150));
// allCharacters.push(new Zombie("zombie", "image/zombie01/idleLeft1.png", 0, 0, 222, 372, 220, 80, 100, 150));

let update = function(){
    // Логика персонажей
    for (let character of allCharacters){
        // Логика монстров
        if (character.type != "player" && character.isAlive === true){
            // Движение к игроку до дистанции атаки
            if (character.positionX >= (player.positionX + player.sizeX + character.stats.attackRange)){
                character.positionX -= character.stats.speed * engine.deltaTime / 1000;
            }
            // Атака игрока при достижении дистанции атаки
            if (((character.positionX - player.positionX - player.sizeX) <= character.stats.attackRange) && player.isAlive === true){
                console.log(character.stats.attackTimer);
                character.stats.attackTimer += engine.deltaTime;
                if (character.stats.attackTimer >= character.stats.attackPeriod){
                    character.stats.attackTimer = 0;
                    player.takeDamage(character.stats.attackDamage);
                } 
            }
        }
        // Логика игрока
        if (character.type === "player"){
            // Поиск цели среди монстров
            for (let character of allCharacters){
                if (character.type != "player" && character.isAlive === true){
                    // Атака монстра при достижении дистанции атаки
                    if (((character.positionX - player.positionX - player.sizeX) <= player.stats.attackRange) && character.isAlive === true){
                        console.log(player.stats.attackTimer);
                        player.stats.attackTimer += engine.deltaTime;
                        if (player.stats.attackTimer >= player.stats.attackPeriod){
                            player.stats.attackTimer = 0;
                            character.takeDamage(player.stats.attackDamage);  
                        }
                        break;
                    }
                }
            }
            
        }  
    } 
}

let render = function(){
    DISPLAY.render();
    // for (let group of allGameObjects){
    //     for(let object of group){
    //         DISPLAY.drawObject(object);
    //     }
    // }
    for (let group of allGameObjects){
        for(let object of group){
            DISPLAY.drawObject(object);
        }
    }
    // Отрисовка ХП баров
    for (let character of allCharacters){
        DISPLAY.context.fillStyle = "black";
        DISPLAY.context.fillRect(character.positionX, character.positionY - 10, character.sizeX - 20, 14);
        DISPLAY.context.fillStyle = "red";
        DISPLAY.context.fillRect(character.positionX + 2, character.positionY - 8, (character.stats.currentHealth / character.stats.maxHealth) * (character.sizeX - 24), 10);
        DISPLAY.context.font = "bold 14px sans-serif";
        DISPLAY.context.textAlign = "right";
        DISPLAY.context.fillStyle = "white";
        DISPLAY.context.fillText(character.stats.currentHealth, character.positionX, character.positionY);
        // DISPLAY.context.fillStyle = "black";
        // DISPLAY.context.strokeText(character.stats.currentHealth, character.positionX, character.positionY);
    }
    // DISPLAY.context.fillStyle = "black";
    // DISPLAY.context.fillRect(player.positionX, player.positionY - 10, player.sizeX - 20, 10);
    // DISPLAY.context.fillStyle = "red";
    // DISPLAY.context.fillRect(player.positionX, player.positionY - 10, (player.stats.currentHealth / player.stats.maxHealth) * (player.sizeX - 20), 10);
}

const engine = new Engine(2000, update, render);

window.addEventListener("load", function(){
    DISPLAY.init();
    
    engine.run(engine);
    // DISPLAY.context.drawImage(player.image, 0, 0, 869, 853, 20, 80, 130, 150);
    // DISPLAY.context.drawImage(player.image, 0, 0, 869, 853, 140, 80, 130, 150);
    // DISPLAY.drawObject(player);
    // DISPLAY.drawObject(zombie);
//     for (let character of allCharacters){
//         DISPLAY.drawObject(character);
// }
});