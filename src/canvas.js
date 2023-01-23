import React from 'react'
import './canvas.css';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);

let painting = false;

function startPosition(){
  painting = true;
}

function finishedPosition(){
  painting = false;
}

function draw(e){
  if(!painting) return;
  ctx.linewidth = 10;
  ctx.lineCap = "round";

  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);


function Canvas() {
  return (
    <div>
        <canvas id="canvas">

        </canvas>
    </div>
  )
}

export default Canvas