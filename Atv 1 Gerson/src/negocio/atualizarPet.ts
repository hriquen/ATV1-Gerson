import Entrada from "../io/entrada";
import Pet from "../modelo/pet";
import atualizar from "./atualizar";

export default class AtualizarPet extends atualizar{
    private pets: Array<Pet>;
    private entrada: Entrada;

    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log("\nPets disponíveis para atualização:");
        this.pets.forEach((pet, index) => {
            console.log(`${index + 1} - ${pet.nome} (${pet.tipo}, ${pet.raca}, ${pet.genero})`);
        });

        let petIndex = this.entrada.receberNumero(`Escolha o número do pet que deseja atualizar: `) - 1;

        if (petIndex >= 0 && petIndex < this.pets.length) {
            let pet = this.pets[petIndex];

            console.log(`\nAtualizando informações do pet ${pet.nome}`);
            console.log(`Deixe o campo vazio para manter o valor atual.`);

            let novoNome = this.entrada.receberTexto(`Novo nome (${pet.nome}): `);
            if (novoNome.trim() !== "") pet.nome = novoNome;

            let novoTipo = this.entrada.receberTexto(`Novo tipo (${pet.tipo}): `);
            if (novoTipo.trim() !== "") pet.tipo = novoTipo;

            let novaRaca = this.entrada.receberTexto(`Nova raça (${pet.raca}): `);
            if (novaRaca.trim() !== "") pet.raca = novaRaca;

            let novoGenero = this.entrada.receberTexto(`Novo gênero (${pet.genero}): `);
            if (novoGenero.trim() !== "") pet.genero = novoGenero;

            console.log("\nInformações do pet atualizadas com sucesso!");
        } else {
            console.log("\nPet não encontrado. Atualização cancelada.");
        }
    }
}
