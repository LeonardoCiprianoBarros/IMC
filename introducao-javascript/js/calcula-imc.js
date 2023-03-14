var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {
   console.log(pacientes);
   const pac = pacientes[i];


   var tdpeso = pac.querySelector(".info-peso");

   var tdAltura = pac.querySelector(".info-altura");
   var tdgordura = pac.querySelector(".info-gordura");

   var peso = tdpeso.textContent;
   var altura = tdAltura.textContent;
   var gordura = tdgordura.textContent;

   pesovalid = validpeso(peso);
   alturavalid = validaltura(altura);


   var tdimc = pac.querySelector(".info-imc");

   if (!pesovalid) {

      tdimc.textContent = "peso inválido";

      pac.classList.add("valor-invalido");
      pesovalid = false;

   }

   if (!alturavalid) {

      tdimc.textContent = "Altura inválida";
      pac.classList.add("valor-invalido");
      alturavalid = false;

   }
   if (pesovalid == true && alturavalid == true) {

      var imc = calcularimc(peso, altura);

      tdimc.textContent = imc;
   }


   function validpeso(peso) {
      if (peso > 0 && peso < 600) {
         return true;
      } else {
         return false;
      }
   }


   function validaltura(altura) {
         if ( altura >= 0.65 && altura <= 2.51) {
            return true
   }else {
      return false
   }
}


   function calcularimc(peso, altura) {
      var imc = 0;

      imc = peso / (altura * altura);

      return imc.toFixed(2);
   }
}