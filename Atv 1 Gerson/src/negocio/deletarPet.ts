import Entrada from "../io/entrada";
import Pet from "../modelo/pet";
import deletar from "./deletar";

export default class DeletarPet extends deletar {
    private pets: Array<Pet>;
    private entrada: Entrada;

    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        console.log("\nPets disponíveis para exclusão:");
        this.pets.forEach((pet, index) => {
            console.log(`${index + 1} - ${pet.nome} (${pet.tipo}, ${pet.raca}, ${pet.genero})`);
        });

        let petIndex = this.entrada.receberNumero(`Escolha o número do pet que deseja deletar: `) - 1;

        if (petIndex >= 0 && petIndex < this.pets.length) {
            let pet = this.pets[petIndex];
            console.log(`\nPet selecionado: ${pet.nome} (${pet.tipo}, ${pet.raca}, ${pet.genero})`);

            let confirmacao = this.entrada.receberTexto(`Tem certeza que deseja excluir este pet? (s/n): `);

            if (confirmacao.toLowerCase() === "s") {
                this.pets.splice(petIndex, 1);
                console.log(`\nPet ${pet.nome} foi deletado com sucesso!`);
            } else {
                console.log("\nOperação de exclusão cancelada.");
            }
        } else {
            console.log("\nPet não encontrado. Exclusão cancelada.");
        }
    }
}
