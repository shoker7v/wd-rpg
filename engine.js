class Engine {
    constructor(timeStep, update, render){
        this.timeStep = timeStep,
        this.update = update,
        this.render = render,
        this.currentTime,
        this.lastUpdateTime = 0,
        this.deltaTime,
        // this.accumulatedTime = 0,
        this.animationFrameRequest
        
        
    }
    run = function(object){
        this.currentTime = window.performance.now();
        this.deltaTime = this.currentTime - this.lastUpdateTime;
        // this.update(console.log(this.deltaTime));
        this.update();
        this.render();
        this.lastUpdateTime = this.currentTime;
        
        // this.accumulatedTime += this.currentTime
        // if ((this.currentTime - this.lastUpdateTime) >= this.timeStep){
            
        //     // this.accumulatedTime -= this.timeStep;
        //     this.lastUpdateTime = this.currentTime;
        //     console.log("updated at " + this.lastUpdateTime);
        //     this.update();
        //     this.render();
        // }
        this.animationFrameRequest = window.requestAnimationFrame(function(){
            object.reRun(object);
        });
    }
    reRun = function(object){
        object.run(object);
    }
    stop = function(){
        window.cancelAnimationFrame(this.animationFrameRequest);
    }
}