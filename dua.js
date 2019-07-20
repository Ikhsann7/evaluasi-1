document.write('<h2>2. </h2>')

var banyakAngka = 20;
var angkaGenap = [];
var angkaGanjil = [];

function klasifikasiAngka(n){
	for(i = 1; i <= 20; i++){
		if(i % 2 == 0){
			angkaGenap.push(i)
		}
		else{
			angkaGanjil.push(i)
		}
	}
}

klasifikasiAngka(banyakAngka);
document.write(angkaGanjil);
console.log(angkaGanjil)
document.write('<br>');
document.write(angkaGenap);
console.log(angkaGenap)