export default class Produto {
    public nomeProduto: string
    public valor: string
    constructor(nomeProduto: string, valor: string){
        this.nomeProduto = nomeProduto
        this.valor = valor
    }
    public get getNomeProduto(): String{
        return this.nomeProduto
    }
    public get getValor(): String{
        return this.valor
    }

}