
'use strict';


function test(){
    this.a = function (a){
        console.log('chay vao day');
        this.e=a;
  
    }

   this.b= function (){
        console.log(this.e);
    }



    console.log(this.c);

    console.log(this.g);



    


};


var c = new test();
c.a(1);
c.b();

