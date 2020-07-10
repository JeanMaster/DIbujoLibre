
var lugardedibujo= document.getElementById("area_de_dibujo");
var lienzo= lugardedibujo.getContext("2d");

var lienzoMause= lugardedibujo.getBoundingClientRect();



lugardedibujo.addEventListener("mousemove", dibujandoMouse);

lugardedibujo.addEventListener("mouseenter", e =>{
    xinicial= e.clientX-390;
    yinicial= e.clientY-20;
});


var teclas={
    izquierda:37,
    abajo: 40,
    derecha: 39,
    arriba: 38
};

var xInicial= lugardedibujo.width/2;
var yInicial= lugardedibujo.width/2;

var xFinal= lugardedibujo.width/2;
var yFinal= lugardedibujo.width/2;


var xinicial;
var yinicial;



function dibujandoMouse(e){

    xfinal= e.clientX-390;
    yfinal= e.clientY-20;

    lienzo.beginPath();
    lienzo.strokeStyle= "green";
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();


    xinicial= e.clientX-390;
    yinicial= e.clientY-20;
}
