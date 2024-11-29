import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";

export default class RegistrarConsumoProduto {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        this.clientes = clientes;
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public registrar(): void {
        console.log(`\nInício do registro de consumo de produtos`);

        if (this.clientes.length === 0) {
            console.log(`Nenhum cliente cadastrado.`);
            return;
        }

        if (this.produtos.length === 0) {
            console.log(`Nenhum produto cadastrado.`);
            return;
        }

        console.log(`Clientes:`);
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome}`);
        });

        let clienteIndex = this.entrada.receberNumero(`Escolha um cliente pelo número: `) - 1;

        if (clienteIndex < 0 || clienteIndex >= this.clientes.length) {
            console.log(`Cliente inválido.`);
            return;
        }

        let cliente = this.clientes[clienteIndex];

        console.log(`\nProdutos disponíveis:`);
        this.produtos.forEach((produto, index) => {
            console.log(`${index + 1} - ${produto.nomeProduto} (${produto.valor})`);
        });

        let produtoIndex = this.entrada.receberNumero(
            `Escolha um produto pelo número (0 para cancelar): `
        ) - 1;

        if (produtoIndex === -1) {
            console.log(`Operação cancelada.`);
            return;
        }

        if (produtoIndex >= 0 && produtoIndex < this.produtos.length) {
            let produto = this.produtos[produtoIndex];
            let quantidade = this.entrada.receberNumero(`Informe a quantidade consumida: `);

            if (quantidade <= 0) {
                console.log(`Quantidade inválida.`);
                return;
            }

            cliente.adicionarProdutoConsumido(produto, quantidade);
            console.log(
                `${quantidade} unidade(s) do produto ${produto.nomeProduto} registradas para o cliente ${cliente.nome}.`
            );
        } else {
            console.log(`Opção inválida.`);
        }
    }
}
