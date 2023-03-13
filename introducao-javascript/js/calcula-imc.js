var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {

   const pac = pacientes[i];


   var tdpeso = pac.querySelector(".info-peso");

   var tdAltura = pac.querySelector(".info-altura");
   var tdgordura = pac.querySelector(".info-gordura");

   var peso = tdpeso.textContent;
   var altura = tdAltura.textContent;
   var gordura = tdgordura.textContent;

   pesovalid = true;
   alturavalid = true;


   var tdimc = pac.querySelector(".info-imc");

   if (peso < 0 || peso > 565) {

      tdimc.textContent = "peso inválido";


      pac.classList.add("valor-invalido");
      pesovalid = false;

   }

   if (altura < 0 || altura > 3.0) {

      tdimc.textContent = "Altura inválida";
      pac.classList.add("valor-invalido");
      alturavalid = false;

   }
   if (pesovalid == true && alturavalid == true) {
      
      var imc = calcularimc(peso, altura);

      tdimc.textContent = imc;
   }

}
   function calcularimc(peso,altura){
      var imc = 0;

      imc = peso / (altura * altura);

      return imc.toFixed(2);
   }