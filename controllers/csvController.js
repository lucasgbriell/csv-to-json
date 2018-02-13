const readline = require('readline');
const fs = require('fs');
const csvController = {};


csvController.csvToJson = (req, res, next) => {

    const convertCsv = function () {

        let lines = [];
        let header = [];
        let content = [];
        const src = 'public/uploads/csv-file.csv';

        let readable = readline.createInterface({
            input: fs.createReadStream(src)
        });

        readable.on('line', (line) => {
            lines.push(line);
        }).on('close', () => {
            header = lines[0].split(",");
            createJson({lines,header,content});
        });
    }

    const createLine = ({line,header}) =>{

        let obj = {};
        let currentline = line.split(",");
        for (var j = 0; j < header.length; j++) {
            obj[header[j]] = currentline[j];
        }
        return obj;
    } 

    const createJson = ({lines,header,content}) => {
        for (let i = 1; i < lines.length; i++) {
            const obj = createLine({line:lines[i],header});
            content.push(obj);
        }
        res.setHeader('Content-disposition', 'attachment; filename= csvConverted.json');
        res.setHeader('Content-type', 'application/json');
        res.json(content);
    }

    convertCsv();
}

module.exports = csvController;
