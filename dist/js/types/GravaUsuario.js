const transacoes = JSON.parse(localStorage.getItem("tbusuario")) || [];
const Grava = {
    getGruposTransacoes() {
        const gruposTransacoes = [];
        const listaUsuarios = structuredClone(transacoes);
        let vPush = "S";
        for (let transacao of listaUsuarios) {
            if (vPush === "S") {
                vPush = "N";
                gruposTransacoes.push({
                    usuario: []
                });
            }
            gruposTransacoes.at(-1).usuario.push(transacao);
        }
        return gruposTransacoes;
    },
    registrarTransacao(novaTransacao) {
        transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("tbusuario", JSON.stringify(transacoes));
    }
};
export default Grava;
