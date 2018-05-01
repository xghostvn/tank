var express = require('express');
var app = express();


console.log(__dirname);

app.use(express.static(  __dirname  + '/public'));



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});



server = app.listen(3001);



const io = require('socket.io')(server);

const MAP_WIDTH=900;
const MAP_HEIGHT=700;

var playertank=[];


io.on('connection',(socket) =>{

        console.log('new user : ' + socket.id);

        socket.on('user_login',(data) =>{

            var x= Random(40,MAP_WIDTH-100);
            var y=Random(40,MAP_HEIGHT-100);




            let tank={
                'id':socket.id,
                'x':x,
                'y':y,
                'orient':1
                
            };


            playertank.push(tank);


            socket.emit('user',playertank);


            socket.broadcast.emit('new_enemy',tank);

            
                socket.on('move',(data) =>{
                    

           



                    for(var i=0;i<playertank.length;i++){
                        if(playertank[i].id==data.id){
                            console.log('123');
                            playertank[i]=data;
                        }
                    }




                    socket.broadcast.emit('move',data);

                });

                

        });



      

});


function Random(min,max){
    return Math.random()*(max-min) + min;
}




