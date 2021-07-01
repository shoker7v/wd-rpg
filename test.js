let GAME = {
    width: 440,
    height: 300,
    context: undefined,
    zombie01: undefined,
    pirate01: undefined,
    sprites: {
        background: undefined,
        zombie01: undefined,
        pirate01: undefined
    },
    init: function(){
        let canvas = document.getElementById("canvas");
        this.context = canvas.getContext("2d");
    },
    load: function(){
        //Изображение надо загрузить, нарисовать, вывести на экран
        this.sprites.background = new Image();
        this.sprites.background.src = "image/background/background.png"; //Загрузка
        this.sprites.zombie01 = new Image();
        this.sprites.zombie01.src = "image/zombie01/Idle1.png";
        this.sprites.pirate01 = new Image();
        this.sprites.pirate01.src = "image/pirate01/idle01.png";
    },
    start: function(){
        
        this.init();
        this.load();
        this.run();
        console.log("hao");
    },
    render: function(){
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(this.sprites.background, 0, 0); //Нарисовка
        //this.context.drawImage(this.sprites.zombie01, this.zombie01.x, this.zombie01.y);
        this.context.drawImage(this.sprites.pirate01, 0, 0, this.pirate01.width, this.pirate01.height, this.pirate01.x, this.pirate01.y, this.pirate01.sizeX, this.pirate01.sizeY);
        this.context.drawImage(this.sprites.zombie01, 0, 0, this.zombie01.width, this.zombie01.height, this.zombie01.x, this.zombie01.y, this.zombie01.sizeX, this.zombie01.sizeY);
    },
    run: function(){
        this.render();
        console.log("render");
        window.requestAnimationFrame(function(){
            GAME.run();
        });
    }
};

GAME.zombie01 = {
    width: 222,
    height: 372,
    
    x: 220,
    y: 80
    sizeX: 100,
    sizeY: 150,
};

GAME.pirate01 = {
    width: 869,
    height: 853,
    
    x: 20,
    y: 80,
    sizeX: 130,
    sizeY: 150
};

window.addEventListener("load", function(){
    GAME.start();
});
