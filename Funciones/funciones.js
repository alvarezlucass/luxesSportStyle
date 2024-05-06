const formulario= document.querySelector("#formulario");


/*Crear evento*/
formulario.addEventListener("submit", validarFormulario)

/*funciones*/

function validarFormulario(e){
    e.preventDefault();
    const nombre  = document.querySelector("#nombre").value
    const apellido  = document.querySelector("#apellido").value
    const edad  = document.querySelector("#edad").value
    const email  = document.querySelector("#mail").value
    const telefono  = document.querySelector("#telefono").value
    const mensaje  = document.querySelector("#mensaje").value
    
    
    
    
    
   const respuesta = document.getElementById("respuesta");
   respuesta.textContent =  alert(`hola ${nombre} ,muchas gracias por completar el fomulario!!`)
  console.log(nombre, apellido , edad, email, telefono, mensaje)
   
   
}

