var paciente = document.querySelectorAll(".paciente");
/* console.log(paciente); */

for (var i = 0; i <paciente.length; i++ ) {
   /* console.log(paciente[i]); */
   const pac = paciente[i];


var tdpeso = pac.querySelector(".info-peso");
/* console.log(tdpeso); */
var tdAltura = pac.querySelector(".info-altura");
var tdgordura= pac.querySelector(".info-gordura");

var peso = tdpeso.textContent;
var altura = tdAltura.textContent;
var gordura = tdgordura.textContent;

pesovalid = true;
alturavalid = true;
/* console.log(paciente); //td peso

console.log( tdpeso); //t

console.log(peso); //peso
console.log(altura); //altura
console.log(gordura); //gordura */

var tdimc = pac.querySelector(".info-imc");

if (peso < 0  || peso > 565) {
   /*  console.log("Peso inválido"); */
    tdimc.textContent = "peso inválido";

    
    pac.classList.add("valor-invalido");
    pesovalid = false;

 }

 if (altura < 0  || altura > 3.0) {
    /* console.log("Altura inválido"); */
    tdimc.textContent = "Altura inválida";
    pac.classList.add("valor-invalido");
    alturavalid = false;
 }
if ( pesovalid == true && alturavalid == true) {
var imc = peso / (altura * altura);

/*  console.log('imc',imc); */
 /* Primeiro.querySelector(".info-imc").innerHTML = imc; */
 tdimc.textContent = imc.toFixed(2);
}
var btn = document.querySelector("#adicionar-paciente");


}
btn.addEventListener("click", function(event) {
   event.preventDefault()
   var form = document.querySelector("#form-adiciona");
   altura = form.altura.value;
   gordura = form.gordura.value;
   peso = form.peso.value;
   nome = form.nome.value;
 
/* console.log(nome, peso, altura, gordura); */
   var tr = document.createElement("tr");
   

   var tdnome = document.createElement("td");
   var tdpeso = document.createElement("td");
   var tdAltura = document.createElement("td");
   var tdgordura = document.createElement("td");
   var imctd= document.createElement("td");

   tdnome.textContent = nome;
   tdpeso.textContent = peso;
   tdAltura.textContent = altura;
   tdgordura.textContent = gordura;
   
   tr.appendChild(tdnome);
   tr.appendChild(tdpeso);
   tr.appendChild(tdAltura);
   tr.appendChild(tdgordura);
   

   var tabela = document.querySelector('#tabela-pacientes');
   
   tabela.appendChild(tr);

  
   console.log(tabela);
   

});
