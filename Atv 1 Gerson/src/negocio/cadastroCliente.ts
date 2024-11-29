import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Telefone from "../modelo/telefone"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
    
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/');
        let ano = new Number(partesData[2].valueOf()).valueOf();
        let mes = new Number(partesData[1].valueOf()).valueOf() - 1;  
        let dia = new Number(partesData[0].valueOf()).valueOf();
        let dataEmissao = new Date(ano, mes, dia);
        let cpf = new CPF(valor, dataEmissao);
        
        
        let telefones: Telefone[] = [];  
        console.log("\nCadastro de telefones:");
        let adicionarOutro = true;  
        while (adicionarOutro) {
            let ddd = this.entrada.receberTexto(`Informe o DDD do telefone do cliente: `);
            let numero = this.entrada.receberTexto(`Informe o número do telefone do cliente: `);
            let telefone = new Telefone(ddd, numero);
            telefones.push(telefone);
            let resposta = this.entrada.receberTexto(`Deseja adicionar outro telefone? (s/n): `);
            adicionarOutro = resposta.toLowerCase() === 's';  
        }
        let cliente = new Cliente(nome, nomeSocial, cpf);
        telefones.forEach(telefone => cliente.adicionarTelefone(telefone));
        this.clientes.push(cliente);
        console.log(`\nCadastro concluído\n`);
    }
    
    
}