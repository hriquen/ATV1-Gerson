import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemValor extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nListagem dos 5 clientes que mais consumiram por valor:`);

        if (this.clientes.length === 0) {
            console.log(`Nenhum cliente cadastrado.`);
            return;
        }

        const clientesConsumoValor = this.clientes.map(cliente => {
            const totalGasto = cliente.getProdutosConsumidos.reduce(
                (soma, consumo) => soma + parseFloat(consumo.produto.valor) * consumo.quantidade,
                0
            );
            return { cliente, totalGasto };
        });

        const topClientes = clientesConsumoValor
            .sort((a, b) => b.totalGasto - a.totalGasto)
            .slice(0, 5);

        if (topClientes.length === 0) {
            console.log(`Nenhum consumo registrado.`);
            return;
        }

        topClientes.forEach(({ cliente, totalGasto }, index) => {
            console.log(
                `${index + 1} - ${cliente.nome} (R$ ${totalGasto.toFixed(2)} consumido(s))`
            );
        });
    }
}
