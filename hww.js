<html>
<body>
<canvas id="the_canvas" width="1000" height="1000"></canvas>
<script>
var canvas = document.getElementById('the_canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(200,200,100,0,Math.PI*2,true);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(200,210,75,0,Math.PI,false);
ctx.moveTo(124,210);
ctx.lineTo(275,210);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(475,120);
ctx.arc(400,210,75,0,Math.PI,false);
ctx.lineTo(325,120);
ctx.arc(400,100,75,0,Math.PI,true);
ctx.stroke();

ctx.beginPath();
ctx.arc(240,170,10,0,Math.PI*2,true);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(160,170,10,0,Math.PI*2,true);
ctx.stroke();
ctx.closePath();

</script>
</body>
</html>
