const DISPLAY = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    init: function(){
        let canvas = document.getElementById("canvas");
        this.context = canvas.getContext("2d");
    },
    render: function(){
        this.context.clearRect(0, 0, this.width, this.height);
        // this.context.drawImage(this.sprites.background, 0, 0); //Нарисовка
        // //this.context.drawImage(this.sprites.zombie01, this.zombie01.x, this.zombie01.y);
        // this.context.drawImage(this.sprites.pirate01, 0, 0, this.pirate01.width, this.pirate01.height, this.pirate01.x, this.pirate01.y, this.pirate01.sizeX, this.pirate01.sizeY);
        // this.context.drawImage(this.sprites.zombie01, 0, 0, this.zombie01.width, this.zombie01.height, this.zombie01.x, this.zombie01.y, this.zombie01.sizeX, this.zombie01.sizeY);
    },
    // drawObject2: function(imageName, imageX, imageY, regionWIdth, regionHeight, positionX, positionY, sizeX, sizeY){
    //     // imageName = new Image();
    //     // imageName.src = imageUrl;
    //     this.context.drawImage(imageName, imageX, imageY, regionWIdth, regionHeight, positionX, positionY, sizeX, sizeY);
    // },
    drawObject: function(object){
        // imageName = new Image();
        // imageName.src = imageUrl;
        this.context.drawImage(object.image, object.imageX, object.imageY, object.regionWIdth, object.regionHeight, object.positionX, object.positionY, object.sizeX, object.sizeY);
    }
    
};

// asd = new Image();
// asd.src = "image/pirate01/idle01.png";
// DISPLAY.context.drawImage(asd, 0, 0);


