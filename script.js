const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d'); 

let size = 10;

canvas.addEventListener('mousedown', ()=>{

});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);//Creates an arc
    /*
    ctx.arc(x,y,radius,startradius,endradius,clockwise)
    */
   ctx.stroke();//This method is used to actually draw the arc
}



function draw(params) {
    drawCircle(50,50);

    requestAnimationFrame(draw);//Watch video on it
}

draw();