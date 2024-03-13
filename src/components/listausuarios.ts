import Conta from "../types/GravaUsuario.js";
import { GrupoUsuario } from "../types/GrupoUsuario.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

renderizarExtrato();
function renderizarExtrato(): void {
    const gruposTransacoes: GrupoUsuario[] = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes: string = "";

    for (let grupoTransacao of gruposTransacoes)
    {
        let htmlTransacaoItem: string = "";
        for (let transacao of grupoTransacao.usuario)
        {
//            <strong>Publicação: </strong>${formatarData(transacao.publicacao, FormatoData.PADRAO)}<BR><BR>

            htmlTransacaoItem += `
                <div class="transacao-item">
                        <span class="tipo"><strong>ID:</strong> ${transacao.idusuario}<BR>
                                           <strong>Nome:</strong> ${transacao.nome}<BR>
                                           <strong>CPF: </strong>${transacao.cpf}<BR>
                                           <strong>Telefone: </strong>${transacao.telefone}<BR>
                                           <strong>__________________________________________________________</strong><BR>
                        </span>
                </div>
            `;
        }

        htmlRegistroTransacoes += `
                ${htmlTransacaoItem}
        `;
    }

    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>Não há livros cadastrados.</div>";
    }

    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}

const Listausuarios = {
    atualizar(): void {
        renderizarExtrato();
    }
}
export default Listausuarios;