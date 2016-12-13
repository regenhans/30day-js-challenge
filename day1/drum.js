var drumkeys = ['a','s','d','f','g','h'];

window.addEventListener("keypress", playKey);

function playKey(e){
	var keynum;
	if(window.event) {
		keynum = e.keyCode;
 	}
	else if(e.which){
		keynum = e.which;
 	}
	var pressedKey = String.fromCharCode(keynum);
	
	drumkeys.map(function(letter){
		if (letter == pressedKey){
			var domletter = document.getElementById(pressedKey);
			domletter.className += ' drum-active';
			var audio = document.getElementById(pressedKey + 'sound');
			audio.currentTime = 0;
			audio.play();


			var reset = setTimeout(function(){
				console.log('called');
				document.getElementById(pressedKey).className = '';
				document.getElementById(pressedKey).className = 'drum-button';
			}, 300);

		 }
	});
}
