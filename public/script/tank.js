var _createClass = function(){
    function defineProperties(target,props){
        for(var i=0;i<props.length;i++){
            var descriptor = props[i];

            Object.defineProperty(target.prototype,descriptor.key,descriptor);
        }
    }


    return defineProperties;
}();


var Tank = function(){

    function Tank(x,y,speed,type,id,orient){
        this.id=id;
        this.x=x;
        this.y=y;
        this.currentOrient=orient;
        this.Playertype=type;
        this.speed=speed;
        this.image=new Image();
        this.isAlive=true;

        this.image_up=new Image();
        this.image_down=new Image();
        this.image_right=new Image();
        this.image_left=new Image();

        if(this.Playertype==1){

            this.image_up=image_up_player_up_1;
            this.image_down=image_up_player_up_2;
            this.image_left=image_up_player_up_3;
            this.image_right=image_up_player_up_4;
        }
        else {
            this.image_up=image_up_enemy_up_1;
            this.image_down=image_up_enemy_up_2;
            this.image_left=image_up_enemy_up_3;
            this.image_right=image_up_enemy_up_4;
        }
       
    }


    _createClass(Tank,[{
        key:'draw',
        value:function(context){
           if(this.isAlive){
               switch(this.currentOrient){
                   case 1:
                    this.image=this.image_up;
                    break;
                    case 2:
                    this.image=this.image_down;
                    break;
                    case 3:
                    this.image=this.image_left;
                    break;
                    case 4:
                    this.image=this.image_right;
                    break;
               }

               context.drawImage(this.image,this.x,this.y);
           }
        }
    },{
        key:'move',
        value:function(orient){
            this.currentOrient=orient;
            switch(orient){
                case 1: this.y-=speed;
                break;
                case 2: this.y+=speed;
                break;
                case 3:this.x-=speed;
                break;
                case 4:this.x+=speed;
                break;
            }

        }
    }]);


return Tank;

}();