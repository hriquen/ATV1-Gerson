import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import Pet from "../modelo/pet";

export default class ListagemPorTipoRaca extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nListagem dos produtos mais consumidos por tipo e raça de pets:`);

        if (this.clientes.length === 0) {
            console.log(`Nenhum cliente cadastrado.`);
            return;
        }

        const consumoPorTipoRaca: Map<string, Map<string, number>> = new Map();

        this.clientes.forEach(cliente => {
            if (cliente.getPets.length === 0) {
                console.log(`Cliente ${cliente.getNome} não tem pets cadastrados.`);
            } else {
                cliente.getPets.forEach(pet => {
                    const tipo = pet.getTipo;
                    const raca = pet.getRaca;

                    if (!consumoPorTipoRaca.has(tipo)) {
                        consumoPorTipoRaca.set(tipo, new Map());
                    }

                    const consumoPorRaca = consumoPorTipoRaca.get(tipo)!;

                    if (cliente.getProdutosConsumidos.length === 0) {
                        console.log(`Cliente ${cliente.getNome} não consumiu nenhum produto.`);
                    } else {
                        cliente.getProdutosConsumidos.forEach(consumo => {
                            const quantidade = consumo.quantidade;

                            if (consumoPorRaca.has(raca)) {
                                consumoPorRaca.set(raca, consumoPorRaca.get(raca)! + quantidade);
                            } else {
                                consumoPorRaca.set(raca, quantidade);
                            }
                        });
                    }
                });
            }
        });

        if (consumoPorTipoRaca.size === 0) {
            console.log(`Nenhum consumo registrado para pets.`);
            return;
        }

        consumoPorTipoRaca.forEach((racas, tipo) => {
            console.log(`\nTipo de pet: ${tipo}`);
            racas.forEach((quantidade, raca) => {
                console.log(`  Raça: ${raca}, Quantidade total consumida: ${quantidade}`);
            });
        });
    }
}
