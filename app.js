var Reader = require("./Reader");
var Writer = require("./Writer");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var PDFWriter = require("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();



async function main() {
    var dados = await leitor.Read("./users.csv");
    // console.log(dados);

    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(usuarios);

    //escritor.Write("index.html",html);
    escritor.Write(Date.now()+".html",html);
    PDFWriter.WritePDF(Date.now()+".pdf",html);



    //console.log(html);
    //usuarios.rows.push(["Victor Queiroz", "Formação PHP", "PHP", 4]);
    //console.log(usuarios.header);
    //console.log(usuarios.rows);
    //console.log(usuarios.RowCount);
    //console.log(usuarios.ColumnCount);
}

main();