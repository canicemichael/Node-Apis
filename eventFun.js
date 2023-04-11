import MyEmitter from "events";

function returnWallwx() {
    let myEmitter = new MyEmitter();

    setTimeout(function() {
        for (let i = 0; i < 4; i++) {
            myEmitter.emit('BeforeLoop', i);
    
            console.log("the value of i: "+ i);
    
            myEmitter.emit('AfterLoop', i);
        }
    }, 2000);
    
    return myEmitter;
}

let wall = returnWallwx();

wall.on('BeforeLoop', function(data){
    console.log('Before start the process ' + data);
})

wall.on('AfterLoop', function(data){
    console.log('After the process ' + data);
})