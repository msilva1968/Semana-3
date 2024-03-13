import Grava from "../types/GravaUsuario.js";
import { GrupoUsuario } from "../types/GrupoUsuario.js";

export function ValidarCPF(valor: string){

    const gruposTransacoes: GrupoUsuario[] = Grava.getGruposTransacoes();

    let cpf: string = valor;

    for (let grupoTransacao of gruposTransacoes)
    {
        for (let transacao of grupoTransacao.usuario)
        {
           if (cpf === transacao.cpf){
             return true;
           }
        }
    }

    return false;
}