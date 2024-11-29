import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import deletar from "./deletar";

export default class DeletarCliente extends deletar {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        console.log("\nClientes disponíveis para exclusão:");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome} (${cliente.nomeSocial})`);
        });

        let clienteIndex = this.entrada.receberNumero(`Escolha o número do cliente que deseja deletar: `) - 1;

        if (clienteIndex >= 0 && clienteIndex < this.clientes.length) {
            let cliente = this.clientes[clienteIndex];
            console.log(`\nCliente selecionado: ${cliente.nome} (${cliente.nomeSocial})`);

            let confirmacao = this.entrada.receberTexto(`Tem certeza que deseja excluir este cliente? (s/n): `);

            if (confirmacao.toLowerCase() === "s") {
                this.clientes.splice(clienteIndex, 1);
                console.log(`\nCliente ${cliente.nome} foi deletado com sucesso!`);
            } else {
                console.log("\nOperação de exclusão cancelada.");
            }
        } else {
            console.log("\nCliente não encontrado. Exclusão cancelada.");
        }
    }
}
