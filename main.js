canvas =document.getElementById("mycan");
ctx=canvas.getContext("2d");
var lastx, lasty; 
var m ="empty";


canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    m="mouseDown"
   
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    x=e.clientX- canvas.offsetLeft;
    y=e.clientY- canvas.offsetTop;
  if(m=="mouseDown")
  {
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=3;
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(x,y);

    
    console.log("current x" +x)
    console.log("current y" +y)
    ctx.stroke(); 
  }
  lastx=x;
  lasty=y;
  console.log(lastx)
  console.log(lasty)
}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    m="mouseUp"
   
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    m="mouseleave"
   
}


