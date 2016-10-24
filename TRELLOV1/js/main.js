function añadir() {
    var añadeInputs = document.createElement("input");
		añadeInputs.setAttribute("class","text-center");
    var textInput = document.createTextNode("Añadir una lista...");
		
    añadeInputs.appendChild(textInput);
    document.body.appendChild(añadeInputs);
	
	var guardar = document.createElement("button");
		guardar.setAttribute("class","btn-success");
    var textbtn = document.createTextNode("Guardar");
		
    guardar.appendChild(textbtn);
    document.body.appendChild(guardar);
	
	var lista = document.getElementById("lista");
	var texto = document.getElementById(textInput);
	
	var guardarLista = function (){
		var listaAñadida = document.createElement("li");
			listaAñadida.setAttribute("class", "list-group-item");
		var textoContenido = document.createTextNode(listaAñadida);
		
		listaAñadida.appendChild(textoContenido); 
		lista.appendChild(listaAñadida);
		
		textInput.value ="";
	}

}

//Mostrar en el HTML, el texto ingresado al dar click en el botón de "Guardar" del formulario (como si fuera título de la lista). Debajo del título, mostrar el mensaje clickeable de "Añadir una tarjea".