var btn = document.querySelector("#adicionar-paciente");

btn.addEventListener("click", function (event) {
    event.preventDefault()

    var form = document.querySelector("#form-adiciona");

    // extrai informações do formulário
    var paciente = pacienteInfo(form);

    // cria a tr a td do paciente 
    var tr = montartr(paciente);

    // adicionando paciente a tabela
    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(tr);


});

function pacienteInfo(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularimc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montartr(paciente) {

    var tr = document.createElement("tr");
    tr.classList.add("paciente");

    var tdnome = montatd(paciente.nome, "info-nome");
    var tdpeso = montatd(paciente.peso, "info-peso");
    var tdAltura = montatd(paciente.altura, "info-altura");
    var tdgordura = montatd(paciente.gordura, "info-gordura");
    var imctd = montatd(paciente.imc, "info-imc");

    /* tdnome.textContent = paciente.nome;
    tdpeso.textContent = paciente.peso;
    tdAltura.textContent = paciente.altura;
    tdgordura.textContent = paciente.gordura;
    imctd.textContent = paciente.imc;
 */
    tr.appendChild(tdnome);
    tr.appendChild(tdpeso);
    tr.appendChild(tdAltura);
    tr.appendChild(tdgordura);
    tr.appendChild(imctd);

    return tr

}

    function montatd (info, classe) {
    var td = document.createElement("td");
    td.textContent = info;
    td.classList.add(classe);
    
    return td;
} 
