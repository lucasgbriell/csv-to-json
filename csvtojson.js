const readline = require('readline')
const fs = require('fs')

let lines = []
let header = []
let content = []

const readCsv = function(){

    let readable = readline.createInterface({
        input: fs.createReadStream('teste.csv')
    });
    
    return readable.on('line', (line) => {
      lines.push(line);
    })
}


const createJson = function(){
    

    for(let i=1;i<lines.length;i++){
    let obj = {};
    let currentline=lines[i].split(",");   
        for(var j=0;j<header.length;j++){
        obj[header[j]] = currentline[j];
        }           
    content.push(obj);  
    }
    console.log(JSON.stringify(content));
}
console.log(readCsv());




