import Entrada from "../io/entrada"
import Produto from "../modelo/produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto/serviço`);
    
        let nomeProduto = this.entrada.receberTexto(`Por favor informe o nome do produto/serviço: `);
        let valor = this.entrada.receberTexto(`Por favor informe o valor do produto/serviço: `);
        
        

        let produto = new Produto(nomeProduto, valor);

        this.produtos.push(produto);
        console.log(`\nCadastro concluído\n`);
    }
    
    
}