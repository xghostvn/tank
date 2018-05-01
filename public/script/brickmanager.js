var _createClass = function(){

    function defineProperty(target,props){
        
      for (var i = 0; i < props.length; i++) { 
            var descriptor = props[i]; 
  
              Object.defineProperty(target.prototype, descriptor.key, descriptor);
             } 

    }


    return defineProperty;



}();


      var brickManager =  function (){
            function brickManager(){
                this.brickkarr=new Array();
            }


            _createClass(brickManager,[{
                key:'drawAll',
                value: function(context){
                        for(var i=0;i< this.brickkarr.length;i++){
                            this.brickkarr[i].draw(context);
                        }
                }


            },{
                key:'addBrick',
                value:function(brick){
                   this.brickkarr.push(brick);
                }
            },{
                key:'ismoveable',
                value:function(objX,objY,objSize){
                    for(var i=0;i<this.brickkarr.length;i++){
                        if(this.brickkarr[i].isInside(objX,objY,objSize))
                            return false;
                    }
                    return true;
                }
               
            }
        
        ]);        

        return brickManager;

    }();