var _createClass = function () { 
    function defineProperties(target, props) { 
        for (var i = 0; i < props.length; i++) { 
            var descriptor = props[i]; 
            descriptor.enumerable = descriptor.enumerable || false;
             descriptor.configurable = true; 
             if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target.prototype, descriptor.key, descriptor);
             } 
            }
             
            return defineProperties;
            }();




var brick = function(){

    function brick(x,y,size){
                this.x=x;
                this.y=y;
                this.size=size;

                this.img=img_brick;

    }



    _createClass(brick,[{
            key:"draw",
            value:function (context){

                context.drawImage(this.img,this.x,this.y);


            }


    },{

        key:'isInside',
        value:function(objX,objY,objSize){



            if(this.isPointInside(objX,objY,this.x,this.y,this.size)){
                return true;
            }
            if(this.isPointInside(objX+objSize,objY+objSize,this.x,this.y,this.size)){
                return true;
            }

            return false;


        }
    },{
        key:'isPointInside',
        value:function(objX,objY,obj2X,obj2Y,objSize){
            if(objX > obj2X && objX < (obj2X+objSize) && objY > obj2Y && objY < (obj2Y+objSize)){
                return true;
            }
            return false;
        }
    }]);


    return brick;



}();