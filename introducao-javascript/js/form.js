var btn = document.querySelector("#adicionar-paciente");

btn.addEventListener("click", function (event) {
    event.preventDefault()

    var form = document.querySelector("#form-adiciona");

    // extrai informações do formulário
    var paciente = pacienteInfo(form);

    // cria a tr a td do paciente 
    /* var tr = montartr(paciente); */

    var erros = validaPaciente(paciente);
   
    if (erros.length > 0){
        exibiMensagensDeErros(erros);
        return; 
    }

    
    // adicionando paciente a tabela
    /* var tabela = document.querySelector('#tabela-pacientes'); */

    /* tabela.appendChild(tr); */
    adicionaPacienteNaTabela(paciente);

    form.reset();
    document.querySelector("ul").innerHTML = "";

});
function adicionaPacienteNaTabela(paciente){
    var tr = montartr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(tr);
    
}

function exibiMensagensDeErros(erros){
    var ul = document.querySelector("#mensagens-erro");   
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
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

   /*  var tdnome = ;
    var tdpeso = ;
    var tdAltura = ;
    var tdgordura = ;
    var imctd = ; */

    /* tdnome.textContent = paciente.nome;
    tdpeso.textContent = paciente.peso;
    tdAltura.textContent = paciente.altura;
    tdgordura.textContent = paciente.gordura;
    imctd.textContent = paciente.imc;
 */
    tr.appendChild(montatd(paciente.nome, "info-nome"));
    tr.appendChild(montatd(paciente.peso, "info-peso"));
    tr.appendChild(montatd(paciente.altura, "info-altura"));
    tr.appendChild(montatd(paciente.gordura, "info-gordura"));
    tr.appendChild(montatd(paciente.imc, "info-imc"));

    return tr

}

    function montatd (info, classe) {
    var td = document.createElement("td");
    td.textContent = info;
    td.classList.add(classe);
    
    return td;
} 
function validaPaciente (paciente) {

    var erros = [];
    if (paciente.nome.length == 0) erros.push("coloque um nome");

    if (!validpeso(paciente.peso)) erros.push("o peso informado é inválido");

    if (!validaltura(paciente.altura))  erros.push("a altura informada é inválida"); 

    if (paciente.gordura.length == 0)  erros.push("a gordura informada é inválida"); 
return erros;
}
