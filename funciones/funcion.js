
////////////////////////////////////////////////////////

const enviar = document.querySelector("#btnCrear");
enviar.addEventListener("click", crearCajas);

function crearCajas(){
   const contenedor = document.getElementById("container");
   contenedor.innerHTML="";
   const input = document.querySelector("#inputDatos");
   for (let i = 0; i < Number(input.value); i++){
      contenedor.innerHTML += "<div class= 'caja'> " + i + "</div>"; 
      }
   input.value="";
}


// query selector siempre # de la id.