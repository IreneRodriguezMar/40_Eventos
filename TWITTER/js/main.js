(function(){
// Variables
	var lista = document.getElementById("lista"),
		tareaTextarea = document.getElementById("tareaText"),
		btnNuevaTarea = document.getElementById("btn-agregar"),
		btnEliminarTarea = document.getElementById("btn-elimitar");
 
	
	var agregarTarea =function(){
		
//lo que se escriba en text area se guardara en la siguiente variable guardandolo como lista y creando dentro de la lista un nodo de texto
		var	tarea = tareaTextarea.value,
			nuevaTarea = document.createElement("li");
			nuevaTarea.setAttribute("class","list-group-item fondoGris");
//<a href="Elimina"><i class="fa fa-trash-o fa-lg basura text-left" aria-hidden="true"></i></a>	
		var iconoBasura = document.createElement("i");
		    iconoBasura.setAttribute("class","fa fa-trash-o fa-lg basura text-left");
//crea un nodo de texto	
		var	contenido = document.createTextNode(tarea);
		
//si el usuario no agrega nada le aparecera un error
		if (tarea ===""){
			tareaTextarea.setAttribute("placeholder","Agrega tarea valida");
			return false;
		}
//contenido va a estar dentro de mi variable neuvaTarea, 
		nuevaTarea.appendChild(contenido);
		nuevaTarea.appendChild(iconoBasura);
		
//mi contenido en la lista ya quedara dentro de mi li
		lista.appendChild(nuevaTarea);
		
		
//para que mi textarea se limpie cada que agrego tarea
		tareaTextarea.value = "";
// Borrando Elementos de la lista con un evento automatico
		.addEventListener("click", eleminarTarea);
		};	
		
	};
	
	var comprobarTextarea =function(){
		
	};
	var eliminarTarea = function(){
		
	};

// Agregar Tarea al hacer click en el boton
	btnNuevaTarea.addEventListener("click", agregarTarea);
 
// al ejecutar la funcion va a comprobar si esta vacio o no el textarea y le marcara como error obligando al usuario a darle click para quitarlo
	tareaTextarea.addEventListener("click", comprobarTextarea);
 

}());



