import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemQuantidade extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nListagem dos 10 clientes que mais consumiram produtos em quantidade:`);

        if (this.clientes.length === 0) {
            console.log(`Nenhum cliente cadastrado.`);
            return;
        }

        const clientesConsumo = this.clientes.map(cliente => {
            const totalQuantidade = cliente.getProdutosConsumidos.reduce(
                (soma, consumo) => soma + consumo.quantidade,
                0
            );
            return { cliente, totalQuantidade };
        });

        const topClientes = clientesConsumo
            .sort((a, b) => b.totalQuantidade - a.totalQuantidade)
            .slice(0, 10);

        if (topClientes.length === 0) {
            console.log(`Nenhum consumo registrado.`);
            return;
        }

        topClientes.forEach(({ cliente, totalQuantidade }, index) => {
            console.log(
                `${index + 1} - ${cliente.nome} (${totalQuantidade} produto(s) consumido(s))`
            );
        });
    }
}
