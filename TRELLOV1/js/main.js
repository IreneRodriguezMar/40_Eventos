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
	

}

//var lista = document.getElementById("lista");
//	var	tareaTextarea = document.getElementById("tareaText");
//	var	btnNuevaTarea = document.getElementById("btn-agregar");