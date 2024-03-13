export class AtualizaID {
    static salvarID(valor) {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem("IDUsuario", valorComoString);
    }
    static obterID(reviver) {
        const valor = localStorage.getItem("IDUsuario");
        if (valor === null) {
            return null;
        }
        if (reviver) {
            return JSON.parse(valor, reviver);
        }
        return JSON.parse(valor);
    }
}
