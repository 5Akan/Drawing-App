const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d'); 
/*Gets the context , the context is
 used to draw on the canvas Element*/

let size = 10;
let isPressed = false;

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

function drawCircle(x, y) {
    ctx.beginPath();

    /*
    ctx.arc(x,y,radius,startradius,endradius,clockwise)
    */
    ctx.arc(x, y, size, 0, Math.PI * 2);//Creates an arc
    
   ctx.fill();//This method is used to actually draw(stroke) or fill(fill) the arc
}



// function draw(params) {
//     /*Method to clear out a specified rectangular 
//     size on the canvas*/
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     drawCircle(x ,y);

//     /*Tells the browser that you wish to perform an
//     animation and requests the browser to call out the 
//     specified function to update an animation anytime the
//     broswer repaints
//     */
//     requestAnimationFrame(draw);
// }

// draw();