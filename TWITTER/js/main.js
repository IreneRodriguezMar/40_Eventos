(function(){
// Variables
	var lista = document.getElementById("lista");
	var	tareaTextarea = document.getElementById("tareaText");
	var	btnNuevaTarea = document.getElementById("btn-agregar");
	
	var agregarTarea =function(){
		
//lo que se escriba en text area se guardara en la siguiente variable guardandolo como lista y creando dentro de la lista un nodo de texto
		var	tarea = tareaTextarea.value,
			nuevaTarea = document.createElement("li");
			nuevaTarea.setAttribute("class","list-group-item fondoGris");
//crea un nodo de texto	
		var	contenido = document.createTextNode(tarea);
		
		
		var iconoBasura = document.createElement("i");
		    iconoBasura.setAttribute("class","fa fa-trash-o fa-lg basura text-left");
		
		
		//estara esperando a que suceda el evento (click);
			iconoBasura.addEventListener("click",borrarTarea);
		
		// para agregar checkbox hay que ponerle el tipo
		var checkbox = document.createElement("input");
			checkbox.setAttribute("type","checkbox");
		

//si el usuario no agrega nada le aparecera un error
		if (tarea ===""){
			tareaTextarea.setAttribute("placeholder","Agrega tarea valida");
			return false;
		}
//contenido va a estar dentro de mi variable neuvaTarea,
		nuevaTarea.appendChild(checkbox);
		nuevaTarea.appendChild(contenido);
		nuevaTarea.appendChild(iconoBasura);
		
//mi contenido en la lista ya quedara dentro de mi li
		lista.appendChild(nuevaTarea);
		
		
//para que mi textarea se limpie cada que agrego tarea
		tareaTextarea.value = "";
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

//funcion que activara el borrado de mis tareas al dar click en el bote de basura
function borrarTarea(){
	
//el this es el bote de basura pero tiene que ir al li (parent) que es lo que quiero borrar
	var elementoli = this.parentElement;
	
//se tiene que ir al parent de li (ul) para asi darle la instruccion que se regrese y elimine li	
		elementoli.parentElement.removeChild(elementoli);
}
//funcion para linea en texto
function tacharTarea(){
	var tachado = nuevaTarea.addEventListener("click",checkbox);

}

