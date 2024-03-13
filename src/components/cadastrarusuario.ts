import { TransacaoUsuario } from "../types/TransacaoUsuario.js";
import Grava from "../types/GravaUsuario.js";
import Listausuarios from "./listausuarios.js";
import { ValidarCPF } from "./validaCPF.js";
import { ValidarEmail } from "./ValidaEmail.js" 
import { AtualizaID } from "../types/AtualizaID.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event) {
    try 
    {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos do formulário!");
            return;
        }

        const inputnome = elementoFormulario.querySelector("#nome") as HTMLInputElement;
        const inputemail = elementoFormulario.querySelector("#email") as HTMLInputElement;
        const inputcpf = elementoFormulario.querySelector("#cpf") as HTMLInputElement;
        const inputtelefone = elementoFormulario.querySelector("#telefone") as HTMLInputElement;
        const inputestado = elementoFormulario.querySelector("#estado") as HTMLInputElement;
        const inputcidade = elementoFormulario.querySelector("#cidade") as HTMLInputElement;
        const inputbairro = elementoFormulario.querySelector("#bairro") as HTMLInputElement;
        const inputrua = elementoFormulario.querySelector("#rua") as HTMLInputElement;
        const inputnumero = elementoFormulario.querySelector("#numero") as HTMLInputElement;
        const inputcomplemento = elementoFormulario.querySelector("#complemento") as HTMLInputElement;

        let nome: string = inputnome.value;
        let email: string = inputemail.value;
        let cpf: string = inputcpf.value;
        let telefone: string = inputtelefone.value;
        let estado: string = inputestado.value;
        let cidade: string = inputcidade.value;
        let bairro: string = inputbairro.value;
        let rua: string = inputrua.value;
        let numero: string = inputnumero.value;
        let complemento: string = inputcomplemento.value;

        const validaEmail: RegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
        const validaCPF: RegExp = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/;
        const validaTelefone: RegExp = /^\(\d{2}\)\d{4}-\d{4}$/;

        if (!validaTelefone.test(telefone)) {
            alert("Telefone inválido!");
            return;
        }
        if (!validaEmail.test(email)) {
            alert("eMail inválido!");
            return;
        }
        if (ValidarEmail(email)){
            alert("eMail já cadastrado!");
            return;
         }
         if (!validaCPF.test(cpf)) {
            alert("CPF inválido!");
            return;
        }
        if (ValidarCPF(cpf)){
           alert("CPF já cadastrado!");
           return;
        }

        let idusuario: number = AtualizaID.obterID();

        if (idusuario === null){
            idusuario = 0 
        }

        idusuario += 1;
        
        AtualizaID.salvarID(idusuario);
        
        const novaTransacao: TransacaoUsuario = {
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
        }

        Grava.registrarTransacao(novaTransacao);
        Listausuarios.atualizar();
        elementoFormulario.reset();
    }
    catch(erro) {
        alert(erro.message);
    }
});