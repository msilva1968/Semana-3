import Grava from "../types/GravaUsuario.js";
export function ValidarCPF(valor) {
    const gruposTransacoes = Grava.getGruposTransacoes();
    let cpf = valor;
    for (let grupoTransacao of gruposTransacoes) {
        for (let transacao of grupoTransacao.usuario) {
            if (cpf === transacao.cpf) {
                return true;
            }
        }
    }
    return false;
}
