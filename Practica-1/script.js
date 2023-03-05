/*
---------------------------------------
-  Created by Ismael Sandoval Aguilar - 
-    033 E2023 Aplicaciones Moviles   -
---------------------------------------
*/

function mostrarAlerta()
{
// Mostrar mensaje cuando se elimine un objeto
var mensaje = document.createElement("p");
mensaje.innerHTML = "La notificación se eliminó correctamente";
mensaje.classList.add("negritas")

// Agregar elemento
var contenidoDiv = document.getElementById("contenido");
contenidoDiv.appendChild(mensaje);
}

function cerrarCaja(caja)
{
    var cajaPorCerrar = document.querySelector("#" + caja);
    cajaPorCerrar.remove();
    mostrarAlerta();  
}



