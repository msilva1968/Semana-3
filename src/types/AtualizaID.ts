export class AtualizaID {

    static salvarID(valor: number): void {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem("IDUsuario", valorComoString);
    }

    static obterID<T>(reviver?: (this: any, key: string, value: any) => any): T | null  {
        const valor = localStorage.getItem("IDUsuario");

        if (valor === null) {
            return null;

        }
        if (reviver) {
            return JSON.parse(valor, reviver) as T
        }

        return JSON.parse(valor) as T 
    }
}