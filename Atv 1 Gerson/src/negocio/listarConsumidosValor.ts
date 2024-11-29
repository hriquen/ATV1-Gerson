import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemConsumidosQuantidade extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nListagem dos produtos mais consumidos:`);

        if (this.clientes.length === 0) {
            console.log(`Nenhum cliente cadastrado.`);
            return;
        }

        const consumoProdutos: Map<string, { produto: Produto; quantidade: number }> = new Map();
       
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(consumo => {
                const produtoId = consumo.produto.nomeProduto;
                if (consumoProdutos.has(produtoId)) {
                    consumoProdutos.get(produtoId)!.quantidade += consumo.quantidade;
                } else {
                    consumoProdutos.set(produtoId, {
                        produto: consumo.produto,
                        quantidade: consumo.quantidade,
                    });
                }
            });
        });

        const produtosOrdenados = Array.from(consumoProdutos.values()).sort(
            (a, b) => b.quantidade - a.quantidade
        );

        if (produtosOrdenados.length === 0) {
            console.log(`Nenhum consumo registrado.`);
            return;
        }

        produtosOrdenados.forEach(({ produto, quantidade }, index) => {
            console.log(
                `${index + 1} - ${produto.nomeProduto} (${quantidade} unidade(s) consumida(s))`
            );
        });
    }
}
