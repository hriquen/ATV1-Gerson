import Entrada from "../io/entrada";
import Pet from "../modelo/pet";
import Cadastro from "./cadastro";
import Cliente from "../modelo/cliente";

export default class CadastroPet extends Cadastro {
    private pets: Array<Pet>;
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super();
        this.pets = pets;
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`);
    
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `);
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo de pet: `);
        let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `);
        let genero = this.entrada.receberTexto(`Por favor informe o gênero do pet: `);
    
        console.log("\nClientes disponíveis:");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.getNome}`);
        });
    
        let clienteIndex = this.entrada.receberNumero(`Escolha o número do cliente (dono do pet): `) - 1;
    
        if (clienteIndex >= 0 && clienteIndex < this.clientes.length) {
            let dono = this.clientes[clienteIndex];
            let pet = new Pet(nome, tipo, raca, genero, dono);
    
            this.pets.push(pet);
    
            
            dono.adicionarPet(pet);
    
            console.log(`\nCadastro concluído! Pet ${nome} cadastrado com sucesso para o cliente ${dono.getNome}.\n`);
        } else {
            console.log("\nCliente não encontrado! Cadastro do pet cancelado.");
        }
    }
    
    }
