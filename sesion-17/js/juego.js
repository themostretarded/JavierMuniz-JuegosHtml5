let canvas,ctx;
let FPS=50;
let personaje= function(x,y){
    this.x = x;
    this.y = y;
    this.derecha = true;
    this.dibuja = function(){
        ctx.fillStyle = '#FF000';
        ctx.fillRect(this.x,this.y,50,50);
    }
    this.mueve = function(velocidad){
        if(this.derecha ==true){
            if(this.x < 400)
                this.x+=velocidad;
            else {
                    this.derecha =false
                }
        }else{
            if(this.x >50){
                this.x-=velocidad;
            }else{
                this.derecha = true
            }
        }
        
    }
}

let per1 = new personaje(10,100);
let per2 = new personaje(10,200);
let per3 = new personaje(10,300);


function inicializa(){
    canvas=document.getElementById(`canvas`);
    ctx= canvas.getContext(`2d`)

    setInterval(function(){
        principal();
    },1000/FPS);
}

function borraCanvas(){
    canvas.width =500;
    canvas.height =400;
}

function principal(){
borraCanvas();
per1.dibuja();
per2.dibuja();
per3.dibuja();
per1.mueve(3);
per2.mueve(5);
per3.mueve(7);


}
