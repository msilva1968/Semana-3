import { TransacaoUsuario } from "./TransacaoUsuario.js";
import { GrupoUsuario } from "./GrupoUsuario.js";

const transacoes: TransacaoUsuario[] = JSON.parse(localStorage.getItem("tbusuario")) || [];

const Grava = {

    getGruposTransacoes(): GrupoUsuario[] {
        const gruposTransacoes: GrupoUsuario[] = [];
        const listaUsuarios: TransacaoUsuario[] = structuredClone(transacoes);
        
        let vPush: string = "S";

        for (let transacao of listaUsuarios) {

            if (vPush === "S"){
                vPush = "N"; 
                gruposTransacoes.push({
                    usuario: []
                });
                    }
            gruposTransacoes.at(-1).usuario.push(transacao);
        }

        return gruposTransacoes;
    },

    registrarTransacao(novaTransacao: TransacaoUsuario): void {

        transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("tbusuario", JSON.stringify(transacoes));
    }
}

export default Grava;