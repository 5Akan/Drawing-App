const canvas = document.getElementById('canvas');
const incrBtn = document.getElementById('increase');
const decrBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d'); 
/*Gets the context , the context is
 used to draw on the canvas Element*/

let size = 10;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

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

clearEl.addEventListener('click', ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

canvas.addEventListener('mousedown', (e)=>{
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e)=>{
    isPressed = false;

    //So that when mouse is released destination point ceases there
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e)=>{
    if (isPressed == true) {
     /*Returns the x-coordinate of the mouse pointer ie
        left and right of the target element in this case
        the canvas      
    */

    const x2 = e.offsetX; 
    const y2 = e.offsetY;// Above applies for offsetY
    /*Together both offsetX and offsetY return an exact
     point when the mouse is clicked */
    drawCircle(x2, y2)
    drawLine(x, y, x2, y2);

    /* x and y become the new x2 and y2(new e.offsetX 
    and e.offsetY)i.e where the mouse pointer stops after
    the drawLine function is executed is the new x2 and y2
    so we assign them to the destination points, x and y */
    
    x = x2;
    y = y2;
    /* NB It continuously assigns the x2 and y2 to x and y
     thus drawing the line*/


    }
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

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath(); 
    //A destination point where the line ends
    ctx.moveTo(x1, y1);
    
    //Creates another point and draws a line from that point to the destination point
    ctx.lineTo(x2, y2);
    ctx.lineWidth = size *2;
    ctx.strokeStyle = color;
    ctx.stroke();
    
}

function sizeUpdateOnScreen(params) {
      sizeEL.innerText = size;
    
}


