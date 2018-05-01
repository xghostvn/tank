const MAP_WIDTH = 900;
const MAP_HEIGHT = 700;
const MAP_SIZE=20;
const speed = 3;
var map;
var socket = io.connect('http://localhost:3001');
var orient=1;
var context = void 0;
var tankSize=33;
var tank;
var new_enemy; 

var playerMgr = new TankManger();


function game_start(x,y,type,id,orient){
    map=new TankMap(MAP_WIDTH,MAP_HEIGHT,MAP_SIZE);
    tank = new Tank(x,y,speed,type,id,orient);
}




socket.on('user',(data) => {

    for(var i=0;i<data.length-1;i++){
        var enemy = new Tank(data[i].x,data[i].y,speed,2,data[i].id,1);
       playerMgr.addnewTank(enemy);
    }


    game_start(data[data.length-1].x,data[data.length-1].y,1,data[data.length-1].id,1);
   
});


socket.on('new_enemy',(data)=>{
    console.log('new enemy')
   new_enemy = new Tank(data.x,data.y,speed,2,data.id,1);
   playerMgr.addnewTank(new_enemy);

});


function draw(context){
    context.fillStyle = '#000000';
        context.fillRect(0, 0, 1440, 900);
        tank.draw(context);
        map.draw(context);
        playerMgr.draw(context);
        
}

    function gameloop(){
    
        draw(context);
        update();
    }

function update(){



    switch(orient){
        case 1:
        if(map.ismoveable(tank.x,tank.y-speed,tankSize)){
         
            tank.move(orient);
        }
    
        break;
        case 2:
        if(map.ismoveable(tank.x,tank.y+speed,tankSize)){
            tank.move(orient);
        }
        break;
        case 3:
        if(map.ismoveable(tank.x-speed,tank.y,tankSize)){
            tank.move(orient);
        }
        break;
        case 4:
        if(map.ismoveable(tank.x+speed,tank.y,tankSize)){
            tank.move(orient);
        }
      
        break;

        
    }

    if(orient!=0){
        emit_move();
     
    }

}

window.onkeyup = (e) => {
    orient=0;
}





socket.on('move',(data)=>{
   playerMgr.updateTank(data);
});


window.onkeydown = (e)=>{
    switch(e.keyCode){
        case 37: 
            orient=3;
         
            break;

        case 39:
            orient=4;
          
            break;

        case 40:
            orient=2;
        
            break;

         case 38:
            orient=1;
           
            break;


    }

}



function emit_move(){
    let tank_move = {
        'id':tank.id,
        'x':tank.x,
        'y':tank.y,
        'orient':orient
    }

    socket.emit('move',tank_move);

}



$(function(){

        var modal_login=$('#login');
        modal_login.modal('show');


        modal_login.on('shown.bs.modal',function(){
                $('#name').focus();
        });



        modal_login.on('hidden.bs.modal',function(){

                var name=$('#name');

                if(name.val()==''){
                    modal_login.modal('show');
                    return;
                }


                var bricks=new brick(200,200,20);
                    var brickss=new brickManager();
                socket.emit('user_login',{name:name.val()});
                

              

              
                var canvas = $('#game')[0];
                context = canvas.getContext("2d"); 
                context.fillStyle = '#000000';
                canvas.width = MAP_WIDTH;
                canvas.height = MAP_HEIGHT;

                setInterval(gameloop,17);
           



        });



});
