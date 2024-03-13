import Grava from "../types/GravaUsuario.js";
export function ValidarEmail(valor) {
    const gruposTransacoes = Grava.getGruposTransacoes();
    let email = valor;
    for (let grupoTransacao of gruposTransacoes) {
        for (let transacao of grupoTransacao.usuario) {
            if (email === transacao.email) {
                return true;
            }
        }
    }
    return false;
}
