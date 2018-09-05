var vp = document.getElementById("villaCanvas");
var papel = vp.getContext("2d");


var fondo = {
	url : "img/tile.png",
	cargaOk: false
}
var vaca = {
	url : "img/vaca.png",
	cargaOk: false
}
var pollo = {
	url : "img/pollo.png",
	cargaOk: false
}
var cerdo = {
	url : "img/cerdo.png",
	cargaOk: false
}

//cargar imagen de fondo
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);


//cargar imagen de vaca
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);


//cargar imagen de pollo
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

//cargar imagen de cerdo
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);


function cargarFondo(){
 fondo.cargaOk = true;
 dibujar();
}
function cargarVacas(){
 vaca.cargaOk = true;
 dibujar();
}
function cargarPollos(){
 pollo.cargaOk = true;
 dibujar();
}
function cargarCerdos(){
 cerdo.cargaOk = true;
 dibujar();
}

function dibujar(){
	if(fondo.cargaOk == true){
		papel.drawImage(fondo.imagen,0,0);
	}
	if(vaca.cargaOk == true){
		for (v = 0; v <= 5; v++) {
			var x= aleatorio(0,7);
			var y= aleatorio(0,7);
			var x = x * 60;
		 	var y = y * 60;
			papel.drawImage(vaca.imagen,x,y);
		}
	}
	if(pollo.cargaOk == true){
		for(var p = 0; p <= 5; p++){
			var x= aleatorio(0,6);
			var y= aleatorio(0,6);
			var x = x * 70; 
			var y = y * 70;
			papel.drawImage(pollo.imagen,x,y);
		}
	}
	if(cerdo.cargaOk == true){
		for(var c = 0; c <=6; c++){
			var x= aleatorio(0,5);
			var y= aleatorio(0,5);
			var x = x * 80;
		 	var y = y * 80;
			papel.drawImage(cerdo.imagen,x,y);
		}
	}
}





function aleatorio(min,max){
	var resultado;
	resultado = Math.floor(Math.random()*(max - min -1)) + min;
	return resultado;
}

