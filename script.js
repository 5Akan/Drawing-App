const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d'); 
/*Gets the context , the context is
 used to draw on the canvas Element*/

let size = 30;
let x = 50;
let y = 50;

canvas.addEventListener('mousedown', ()=>{

});

function drawCircle(x, y) {
    ctx.beginPath();

    /*
    ctx.arc(x,y,radius,startradius,endradius,clockwise)
    */
    ctx.arc(x, y, size, 0, Math.PI * 2);//Creates an arc
    
   ctx.fill();//This method is used to actually draw(stroke) or fill(fill) the arc
}



function draw(params) {
    /*Method to clear out a specified rectangular 
    size of the canvas*/
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle(x ,y);

    /*Tells the browser that you wish to perform an
    animation and requests the browser calls out the 
    specified function to update an animation anytime the
    broswer repaints
    */
    requestAnimationFrame(draw);
}

draw();