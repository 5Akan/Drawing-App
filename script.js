const canvas = document.getElementById('canvas');
const incrBtn = document.getElementById('increase');
const decrBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');

const ctx = canvas.getContext('2d'); 
/*Gets the context , the context is
 used to draw on the canvas Element*/

let size = 10;
let isPressed = false;
let color = 'black';

canvas.addEventListener('mousedown', (e)=>{
    isPressed = true;
});

canvas.addEventListener('mouseup', (e)=>{
    isPressed = false;
});

canvas.addEventListener('mousemove', (e)=>{
    if (isPressed == true) {
        /*Returns the x-coordinate of the mouse pointer ie
     left and right of the target element in this case
      the canvas      
    */

    const x = e.offsetX; 
    const y = e.offsetY;// Above applies for offsetY
    /*Together both offsetX and offsetY return an exact
     point when the mouse is clicked */

    drawCircle(x, y);
    }
});

incrBtn.addEventListener('click', ()=>{
    size +=5;

    if (size > 50) {
        size = 50;
    }

    sizeUpdateOnScreen();
});

decrBtn.addEventListener('click', ()=>{
    size -=5;

    if (size < 5) {
        size = 5;
    }

    sizeUpdateOnScreen();
});

colorEl.addEventListener('change', (e)=>{
    color = e.target.value;
});

function drawCircle(x, y) {
    ctx.beginPath();  
     /*
    ctx.arc(x,y,radius,startradius,endradius,clockwise)
    */
    ctx.arc(x, y, size, 0, Math.PI * 2);//Creates an arc

    ctx.fillStyle = color;//For colours
    
   ctx.fill();//This method is used to actually draw(stroke) or fill(fill) the arc
}

function sizeUpdateOnScreen(params) {
      sizeEL.innerText = size;
    
}


