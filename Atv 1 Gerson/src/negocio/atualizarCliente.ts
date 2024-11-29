import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import atualizar from "./atualizar";

export default class AtualizarCliente extends atualizar {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log("\nClientes disponíveis para atualização:");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome} (${cliente.nomeSocial})`);
        });

        let clienteIndex = this.entrada.receberNumero(`Escolha o número do cliente que deseja atualizar: `) - 1;

        if (clienteIndex >= 0 && clienteIndex < this.clientes.length) {
            let cliente = this.clientes[clienteIndex];

            console.log(`\nAtualizando informações de ${cliente.nome} (${cliente.nomeSocial})`);
            console.log(`Deixe o campo vazio para manter o valor atual.`);

            let novoNome = this.entrada.receberTexto(`Novo nome (${cliente.nome}): `);
            if (novoNome.trim() !== "") cliente.nome = novoNome;

            let novoNomeSocial = this.entrada.receberTexto(`Novo nome social (${cliente.nomeSocial}): `);
            if (novoNomeSocial.trim() !== "") cliente.nomeSocial = novoNomeSocial;

            console.log("\nInformações atualizadas com sucesso!");
        } else {
            console.log("\nCliente não encontrado. Atualização cancelada.");
        }
    }
}
