var parcientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("tbody");

    
    tabela.addEventListener("dblclick", function(event) {
        console.log(event.target);

        
            event.target.parentNode.classList.add("fade-out")
            setTimeout(function() {
            event.target.parentNode.remove();
            }, 600);
        
        /* var alvoevento = event.target;
        var paidoalvo = alvoevento.parentNode; // TR = PACIENTE = REMOVER
        paidoalvo.remove(); */

    });
/* parcientes.forEach(function(paciente){
paciente.addEventListener("dblclick", function(){
    console.log("fui clicado");
    this.remove();
});
}); 
 */
