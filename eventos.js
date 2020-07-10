var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};


console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var colorzote = "Blue";
var x = 150;
var y = 150;


var area_de_dibujo, cuadrito, flag = false,
      prevX = 0,
      currX = 0,
      prevY = 0,
      currY = 0,
      dot_flag = false;

init();
      function init()
      {
          canvas = document.getElementById('area_de_dibujo');
          ctx = canvas.getContext("2d");
          w = canvas.width;
          h = canvas.height;

          canvas.addEventListener("mousemove", function (e)
          {
              findxy('move', e)
          },
          false);
          canvas.addEventListener("mousedown", function (e)
          {
              findxy('down', e)
          },
          false);
          canvas.addEventListener("mouseup", function (e)
          {
              findxy('up', e)
          },
          false);
          canvas.addEventListener("mouseout", function (e)
          {
              findxy('out', e)
          },
          false);
      }


function findxy(res, e)
{
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
        dibujarlinea("red", currX,currY,prevX,prevY,papel);
        }
    }
}

function draw()
{
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

//function getMousePos(evt)
//{
  //console.log("moviendose");
//  var rect = area_de_dibujo.getBoundingClientRect();
//  return {
  //  x: evt.clientX - rect.left,
  //  y: evt.clientY - rect.top
//  };
//}





function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujarTeclado(evento)
{
  var colorcito = colorzote;
  var movimiento = 1;
  dibujarlinea(colorcito, x-1, y-1, x+1, y+1, papel);
  switch(evento.keyCode)
  {
    case teclas.UP:
        dibujarlinea(colorcito, x ,y , x, y - movimiento, papel);
        y = y - movimiento;
    break;
    case teclas.RIGHT:
    dibujarlinea(colorcito, x ,y , x + movimiento, y , papel);
    x = x + movimiento;
        break;
    case teclas.LEFT:
    dibujarlinea(colorcito, x ,y , x - movimiento, y ,papel);
    x = x - movimiento;
    break;
    case teclas.DOWN:
    dibujarlinea(colorcito, x ,y , x , y + movimiento, papel);
    y = y + movimiento;
    break;
    default:
      console.log("otra tecla");
    break;
  }
}
