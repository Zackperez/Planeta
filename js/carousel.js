
//Toma todas las imagenes de la caja
var deslizar_contenido = document.getElementById('box');

//Se guardan las imagenes en un array
var imagenes = ['a','b', 'c', 'd','e'];

// Con la variable "i" se lee el tamaño del array
var i = imagenes.length;
	

	//Funcion de adelantar imagen
	function nextImage(){
		//Si la i es menor al total de las imagenes
		if (i< imagenes.length) {
			//i se aumentará 1 para que no quede nunca en 0
			i= i+1;
		}else{
			//Sino, queda igual
			i = 1;
		}
										
		deslizar_contenido.innerHTML = "<img src=carousel/"+imagenes[i-1]+".jpg>";

	}

	//Funcion de retroceder imagen
	function prewImage(){

		if (i<imagenes.length+1 && i>1) {
			i = i-1;

		}else{
			i = imagenes.length;
		}

		deslizar_contenido.innerHTML = "<img src=carousel/"+imagenes[i-1]+".jpg>";

	}

	  setInterval(nextImage ,2500);


	 
