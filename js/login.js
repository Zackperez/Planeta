(function(){
	var formulario = document.getElementsByName('formulario')[0], elementos = formulario.elements, boton= document.getElementById('btn');


	var validarPassword = function (e){
		if (formulario.password.value === ''){
			alert("Faltan campos por llenar en contraseñas");
			e.preventDefault();
		}
		
	};

	var validarEmail = function (e){
		if (formulario.email.value === ''){
			alert("Correo electronico necesario");
			e.preventDefault();
		}
	};


	var validar = function(e){
		validarPassword(e);
		validarEmail(e);
	};

	formulario.addEventListener("submit",validar);



}())

