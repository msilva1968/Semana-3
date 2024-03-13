import Grava from "../types/GravaUsuario.js";
import { GrupoUsuario } from "../types/GrupoUsuario.js";

export function ValidarEmail(valor: string){

    const gruposTransacoes: GrupoUsuario[] = Grava.getGruposTransacoes();

    let email: string = valor;

    for (let grupoTransacao of gruposTransacoes)
    {
        for (let transacao of grupoTransacao.usuario)
        {
           if (email === transacao.email){
             return true;
           }
        }
    }

    return false;
}