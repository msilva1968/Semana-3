import Grava from "../types/GravaUsuario.js";
import Listausuarios from "./listausuarios.js";
import { ValidarCPF } from "./validaCPF.js";
import { ValidarEmail } from "./ValidaEmail.js";
import { AtualizaID } from "../types/AtualizaID.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos do formulário!");
            return;
        }
        const inputnome = elementoFormulario.querySelector("#nome");
        const inputemail = elementoFormulario.querySelector("#email");
        const inputcpf = elementoFormulario.querySelector("#cpf");
        const inputtelefone = elementoFormulario.querySelector("#telefone");
        const inputestado = elementoFormulario.querySelector("#estado");
        const inputcidade = elementoFormulario.querySelector("#cidade");
        const inputbairro = elementoFormulario.querySelector("#bairro");
        const inputrua = elementoFormulario.querySelector("#rua");
        const inputnumero = elementoFormulario.querySelector("#numero");
        const inputcomplemento = elementoFormulario.querySelector("#complemento");
        let nome = inputnome.value;
        let email = inputemail.value;
        let cpf = inputcpf.value;
        let telefone = inputtelefone.value;
        let estado = inputestado.value;
        let cidade = inputcidade.value;
        let bairro = inputbairro.value;
        let rua = inputrua.value;
        let numero = inputnumero.value;
        let complemento = inputcomplemento.value;
        const validaEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
        const validaCPF = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/;
        const validaTelefone = /^\(\d{2}\)\d{4}-\d{4}$/;
        if (!validaTelefone.test(telefone)) {
            alert("Telefone inválido!");
            return;
        }
        if (!validaEmail.test(email)) {
            alert("eMail inválido!");
            return;
        }
        if (ValidarEmail(email)) {
            alert("eMail já cadastrado!");
            return;
        }
        if (!validaCPF.test(cpf)) {
            alert("CPF inválido!");
            return;
        }
        if (ValidarCPF(cpf)) {
            alert("CPF já cadastrado!");
            return;
        }
        let idusuario = AtualizaID.obterID();
        if (idusuario === null) {
            idusuario = 0;
        }
        idusuario += 1;
        AtualizaID.salvarID(idusuario);
        const novaTransacao = {
            idusuario: idusuario,
            nome: nome,
            email: email,
            cpf: cpf,
            telefone: telefone,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            rua: rua,
            numero: numero,
            complemento: complemento
        };
        Grava.registrarTransacao(novaTransacao);
        Listausuarios.atualizar();
        elementoFormulario.reset();
    }
    catch (erro) {
        alert(erro.message);
    }
});
