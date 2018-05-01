


class TankManger{

    constructor(){
        this.tankMgr=new Array();
    }


    addnewTank(tank){
        this.tankMgr.push(tank);
    }   

    draw(context){
        for(var i=0;i<this.tankMgr.length;i++){
            this.tankMgr[i].draw(context);
        }
    }

    updateTank(tank){
        for(var i=0;i<this.tankMgr.length;i++){
            if(this.tankMgr[i].id==tank.id){
           
                this.tankMgr[i].x=tank.x;
                this.tankMgr[i].y=tank.y;
                this.tankMgr[i].currentOrient=tank.orient;
                
            }
        }
    }


}