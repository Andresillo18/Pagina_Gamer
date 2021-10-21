let formulario = document.getElementById('form');
// Aquí se obtiene sobre todos los inputs y se hacen un arreglo
let inputs = document.querySelectorAll('#form input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido:  /^[a-zA-ZÀ-ÿ\s]{5,40}$/, 
	id: /^.{5,15}$/, // 5 a 15 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

// Se crea este objeto para saber si el campo a rellenar esta completo y con los datos correctos
const campos ={
	nombre: false,
	apellido: false,
	id: false,
	correo: false,
	telefono: false
}

//Apunta al nombre de lo que se esta ejecutando o al objetivo
const validarFormulario = (e) => {
	// Dependiendo del input(text) o casilla se selecciona por el nombre
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "apellido":
			validarCampo(expresiones.nombre, e.target, 'apellido');
		break;
		case "Identificación":
			validarCampo(expresiones.id, e.target, 'id');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

// Se llama a la función para validar la info y cambiar iconos y clases 
// Recibe 3 diferentes argumentos para que sea mas flexible, expresion es para saber según el objeto
// input para saber a cual se esta llamando y el campo para la clase
const validarCampo = (expresion, input, campo) => {
	// La función .test() prueba si algo es verdadero o falso
	if(expresion.test(input.value)){
		// LA elimina porque puede ser que ya haya tenido un error anteriormente
		document.getElementById(`form__${campo}`).classList.remove('form__grupo-incorrecto');
		document.getElementById(`form__${campo}`).classList.add('form__grupo-correcto');

		// Eliminar el mensaje de error
		document.querySelector(`#form__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		// Establece que el los valores del objeto según esta sean verdadero
		document.getElementById(`form__${campo}`).classList.add('form__grupo-incorrecto');
		document.getElementById(`form__${campo}`).classList.remove('form__grupo-correcto');

		// Mensaje de error
		document.querySelector(`#form__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

// Afectará a cada input cuando este tenga una reacción
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	// Cuando se selecccione fuera de la casilla
	input.addEventListener('blur', validarFormulario);
});

// El parámetro e significa "evento"
formulario.addEventListener('submit', (e) => {
	// Esto evita que borreo la información del formulario
	e.preventDefault();

	// let perifericos = document.getElementById('perifericos');

	// Revisa que todos las propiedades del objeto campos sean verdadero
	if (campos.nombre && campos.apellido && campos.id && campos.correo && campos.telefono) {
		console.log("Hola");
		// El .reset() hace que todo se elimine 
		formulario.reset();

		document.getElementById('form__mensaje-exito').classList.add('form__mensaje-exito-activo');
		// setTimeout establece algo despues de un tiempo, el primer parámetro es para la acción y el segundo para el tiempo
		setTimeout(() => {
			document.getElementById('form__mensaje-exito').classList.remove('form__mensaje-exito-activo');
		}, 3500);

	} else {
		document.getElementById('form__mensaje').classList.add('form__mensaje-activo');
	}
});