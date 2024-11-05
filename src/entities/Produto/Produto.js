export class Produto{
    id;
    descricao;
    preco;
    estoque;
    data;

    constructor(id, descricao, preco, estoque, data) {
        this.id = id;
        this.descricao = descricao;
        this.preco = preco;
        this.estoque = estoque;
        this.data = data;
    }

    formatToObject(){
        return{
            id: this.id,
            descricao: this.descricao,
            preco: this.preco,
            estoque: this.estoque,
            data: this.data
        }
    }
}