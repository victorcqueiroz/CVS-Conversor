const fs = require("fs");
const util = require("util");



class Reader {

    constructor(){
        this.reader = util.promisify(fs.readFile); // Essa função 'promisify' transformar funções com callback em promises, permitindo assim que haja retorno de dados.
    }


    async Read(filepath) {

        try {
            return await this.reader(filepath, "utf-8");            
        } catch (error) {
            return undefined            
        }

    }
}

module.exports = Reader;