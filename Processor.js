class Processor {

    static Process(data) {
        var a = data.split("\r\n"); // \r\n é para quebra de linha.
        var rows = [];

        //console.log(row);

        a.forEach(elementRow => {
            var arr = elementRow.split(",");
            rows.push(arr);
        });
        return rows;
    }
}

module.exports = Processor;