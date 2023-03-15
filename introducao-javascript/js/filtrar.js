var campofiltro = document.getElementById("filtrar-tabela");
/* console.log(campofiltro); */

campofiltro.addEventListener("input", function () {
    /* console.log(this.value); */
    var pacientes = document.querySelectorAll(".paciente");
    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdnome = paciente.querySelector(".info-nome").textContent;

            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(tdnome)) {
                paciente.classList.add("invisivel");

            } else {
                paciente.classList.remove("invisivel");

            }
        }
    }else{
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
    }

}
});
