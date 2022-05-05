var mouseevent = "";
var last_position_x, last_position_y;
var color = "black";
var width_of_line = 1;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e){
    mouseevent = "mouseDown";
    color = document.getElementById("colorInputThing").value;
    width_of_line = document.getElementById("lineWidthInputThingy").value;

}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e){
    mouseevent = "mouseUp";
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e){
    mouseevent = "mouseLeave";
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseevent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log(last_position_x+" , "+last_position_y);
        ctx.moveTo(last_position_x, last_position_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_x = current_position_of_mouse_x;
    last_position_y = current_position_of_mouse_y;
}
function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}