class Table {
    constructor(arr){
        this.header = arr[0];
        arr.shift();
        this.rows = arr;
    }

    get RowCount(){ // Ao colocar a palavra-chave 'get' antes do método, você trata ele como um atributo. Deve-se sempre retornar algo.
        return this.rows.length;
    }

    get ColumnCount(){
        return this.header.length;
    }
}

module.exports = Table;