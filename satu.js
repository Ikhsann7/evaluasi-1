document.write('<h1>SOAL 1</h1>');

document.write('<h2>1. </h2>')

for(x = 1; x <= 5; x++){
	for(y = 1; y <= 5; y++){
		if (x > 0){
			document.write('+' + ' ')
		}
	}
	document.write('<br>')
}

document.write('<br>')

for(a = 1; a <= 7; a++){
	for(b = 1; b <= 7; b++){
		if(a == 4 || b == 4 ){
			document.write('+' + ' ')
		}
		else{
			document.write(' ' + '-' + ' ')
		}
	}
	document.write('<br>')
}

document.write('<br>')