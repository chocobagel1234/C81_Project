canvas = document.getElementById("myCanvas");
color = "grey";
ctx = canvas.getContext("2d");

//draw rectangle
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

/* -Drawing Circles- */

//Drawing the blue circle
ctx.beginPath();
ctx.strokeStyle = "#0181c8";
ctx.lineWidth = 7;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

//Drawing the black circle
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 7;
ctx.arc(340, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

//Drawing the red circle
ctx.beginPath();
ctx.strokeStyle = "#e9304e";
ctx.lineWidth = 7;
ctx.arc(430, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

//Drawing the yellow circle
ctx.beginPath();
ctx.strokeStyle = "#f5b146";
ctx.lineWidth = 7;
ctx.arc(295, 255, 40, 0, 2 * Math.PI);
ctx.stroke();

//Drawing the green circle
ctx.beginPath();
ctx.strokeStyle = "#009242";
ctx.lineWidth = 7;
ctx.arc(385, 255, 40, 0, 2 * Math.PI);
ctx.stroke();