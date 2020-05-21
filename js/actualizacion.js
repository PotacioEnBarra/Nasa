function datos(){
	var etiqueta="";
	var parametros = location.search.substr(1).split("&");
	parametros.forEach(function(item){
		campos=item.split("=");
		if (campos[0]!="EnviarDatos") {
			switch(campos[0]){
				case "nombre": etiqueta="Nombre: "; break;
				case "correo": etiqueta="Correo: "; break;
				case "titulo": etiqueta="Titulo: "; break;
				case "testimonio": etiqueta="Testimonio: "; break;
			}
			document.getElementById("parrafo").innerHTML+=etiqueta+": "+campos[1]+"<br>";
		}
	});
}
