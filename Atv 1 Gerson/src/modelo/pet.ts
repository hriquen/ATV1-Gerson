import Cliente from "./cliente";

export default class Pet {
    public nome: string
    public tipo: string
    public raca: string
    public genero: string
    public dono: Cliente | null

    constructor(nome: string, tipo: string, raca: string, genero: string, dono: Cliente | null = null) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.dono = dono
    }

    public get getNome() { return this.nome }
    public get getRaca() { return this.raca }
    public get getGenero() { return this.genero }
    public get getTipo() { return this.tipo }
    public get getDono() { return this.dono }
    public toString(): string {
        const dono = this.dono ? this.dono.toString() : "Sem dono";
        return `Pet: ${this.nome}, Tipo: ${this.tipo}, Raça: ${this.raca}, Gênero: ${this.genero}, Dono: ${dono}`;
    }
}
