import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import deletar from "./deletar";

export default class DeletarProduto extends deletar {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        console.log("\nProdutos disponíveis para exclusão:");
        this.produtos.forEach((produto, index) => {
            console.log(`${index + 1} - ${produto.nomeProduto} (${produto.valor}`);
        });

        let produtosIndex = this.entrada.receberNumero(`Escolha o número do produto que deseja deletar: `) - 1;

        if (produtosIndex >= 0 && produtosIndex < this.produtos.length) {
            let produto = this.produtos[produtosIndex];
            console.log(`\nProduto selecionado: ${produto.nomeProduto} (${produto.valor})`);

            let confirmacao = this.entrada.receberTexto(`Tem certeza que deseja excluir este produto? (s/n): `);

            if (confirmacao.toLowerCase() === "s") {
                this.produtos.splice(produtosIndex, 1);
                console.log(`\nProduto ${produto.nomeProduto} foi deletado com sucesso!`);
            } else {
                console.log("\nExclusão cancelada.");
            }
        } else {
            console.log("\nProduto não encontrado. Exclusão cancelada.");
        }
    }
}
