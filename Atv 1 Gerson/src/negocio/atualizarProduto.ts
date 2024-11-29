import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import atualizar from "./atualizar";

export default class AtualizarProduto extends atualizar {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log("\nProdutos disponíveis para atualização:");
        this.produtos.forEach((produto, index) => {
            console.log(`${index + 1} - ${produto.nomeProduto} (${produto.valor})`);
        });

        let produtoIndex = this.entrada.receberNumero(`Escolha o número do produto que deseja atualizar: `) - 1;

        if (produtoIndex >= 0 && produtoIndex < this.produtos.length) {
            let produto = this.produtos[produtoIndex];

            console.log(`\nAtualizando informações de ${produto.nomeProduto} (${produto.valor})`);
            console.log(`Deixe o campo vazio para manter o valor atual.`);

            let novoNome = this.entrada.receberTexto(`Novo nome (${produto.nomeProduto}): `);
            if (novoNome.trim() !== "") produto.nomeProduto = novoNome;

            let novoValor = this.entrada.receberTexto(`Novo valor (${produto.valor}): `);
            if (novoValor.trim() !== "") produto.valor = novoValor;

            console.log("\nInformações atualizadas com sucesso!");
        } else {
            console.log("\nProduto não encontrado. Atualização cancelada.");
        }
    }
}
