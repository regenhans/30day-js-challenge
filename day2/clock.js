function gradTime(time){
	return time*6;
}
function gradHour(hour){
	return hour*30
}


var second = setInterval(function(){
	var canvas = document.getElementById('myCanvas'),
		context = canvas.getContext('2d'),
		centerX = canvas.width/2,
		centerY = canvas.height/2,
		radius = 100;

	context.save();
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.beginPath();
	context.arc(centerX, centerY, radius,0,2*Math.PI);
	context.strokeStyle = "tomato";
	context.stroke();

	var hour = new Date().getHours();
	var minutes = new Date().getMinutes();
	var seconds = new Date().getSeconds();


	//seconds
	context.beginPath();
	context.translate(centerX, centerY);
	context.rotate(gradTime(seconds) * Math.PI/180);
	context.strokeStyle = "green"
	context.strokeRect(0,0, 1, -90);
	context.stroke();
	context.restore();

}, 1000)
