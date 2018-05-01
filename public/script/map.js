var _createClass = function(){

    function defineProperties(target,props){
        for(var i=0;i<props.length;i++){
            var descriptor=props[i];

            Object.defineProperty(target.prototype,descriptor.key,descriptor);
        }
    }


    return defineProperties;

}();



var TankMap = function(){

    function TankMap(width,height,size){
        this.width=width;
        this.height=height;
        this.sise=size;

        this.brickMgr = new brickManager();

        this.initData();


    }


    _createClass(TankMap,[{
        key:'initData',
        value:function(){

            var itemWidth = this.width/this.sise;
            var itemHeight=this.height/this.sise;

            for(var i=0;i<itemWidth;i++){
                for(var j=0;j<itemHeight;j++){
                    if(i==0||j==0||i==itemWidth-1||j==itemHeight-1){
                        var newbrick = new brick(i*this.sise,j*this.sise,this.sise);
                        this.brickMgr.addBrick(newbrick);

                    }
                }



                var tempBrick1 = new brick(200, 150, this.size);
                var tempBrick2 = new brick(230, 400, this.size);
                var tempBrick3 = new brick(180, 120, this.size);
                var tempBrick4 = new brick(280, 520, this.size);
                var tempBrick5 = new brick(620, 320, this.size);
                var tempBrick6 = new brick(780, 420, this.size);

                this.brickMgr.addBrick(tempBrick1);
                this.brickMgr.addBrick(tempBrick2);
                this.brickMgr.addBrick(tempBrick3);
                this.brickMgr.addBrick(tempBrick4);
                this.brickMgr.addBrick(tempBrick5);
                this.brickMgr.addBrick(tempBrick6);


            }


        }
    },{
      key:'draw',
      value:function(context){
            this.brickMgr.drawAll(context);
      }  
    },{
        key:'ismoveable',
        value:function(objX,objY,objSize){
           return this.brickMgr.ismoveable(objX,objY,objSize);
        }
    }]);
    



    return TankMap;


}();