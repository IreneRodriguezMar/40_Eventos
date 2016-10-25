function añadir() {
	
	//con esa sintaxis se podra averiguar quien es el padre de ese elemento
	//document.getElementById("btnañadirlista").parentElement);
	 
	var div = document.getElementById("btnañadirlista").parentElement;
    var añadeInputs = document.createElement("input");
		añadeInputs.setAttribute("placeholder","Añadir una lista...");
	
	//que mi input (añadeInputs) lo guarde como hijo de div, en este caso mi boton
		div.appendChild(añadeInputs);
	
	var guardar = document.createElement("button");
		guardar.setAttribute("class","btn-success");
    var textbtn = document.createTextNode("Guardar");
	
	//que el nodo de texto lo guarde en mi boton gurdar y este lo guarde como hijo de div
		guardar.appendChild(textbtn);
    	div.appendChild(guardar);
	
	//que el boton que cree se active con onclick y con la funcion le digo que me cree un h3 con un nodo de texto	
		guardar.onclick = function (){
	var añadirtitulo = document.createElement("h3");
	var textoContenido = document.createTextNode(añadeInputs.value);
			
	//que el elemento nodo de texto sea guardado como hijo de (añadirtitulo) y este lo guarde como hijo de div	
		añadirtitulo.appendChild(textoContenido); 
		div.appendChild(añadirtitulo);
			
	//que mi input creado lo deje en blanco cada se le da click	
		añadeInputs.value ="";
			
	//		
	var añadirTarjeta = document.createElement("a");
		añadirTarjeta.setAttribute("href", "#");
	var textañadeTarjeta = document.createTextNode("añadir una tarjeta");		
			añadirTarjeta.appendChild(textañadeTarjeta);
			div.appendChild(añadirTarjeta);
		
	}
	//que mi boton de añadir lista sea reemplazado por mi input con boton	
 // div.replaceChild() 
	

}

//Mostrar en el HTML, el texto ingresado al dar click en el botón de "Guardar" del formulario (como si fuera título de la lista). Debajo del título, mostrar el mensaje clickeable de "Añadir una tarjea".