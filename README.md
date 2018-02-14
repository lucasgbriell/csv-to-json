# CSV to JSON
--------------

A simple script to convert csv to JSON.

### Installation


Install the dependencies and start the server.

```sh
$ git clone (this project)
$ npm install
$ npm start
```

### Running tests
Open your web browser and type
```
$ localhost:3000 
```

### Source code

Let's understand the code!

```js
const convertCsv = function () 
```
That's the main function.


```js
let readable = readline.createInterface({
    input: fs.createReadStream(src)
});
readable.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
     header = lines[0].split(",");
     createJson({lines,header,content});
});
```
We will read the csv file using Multer module to help us, and push them inside lines (our array).
```js
const createLine = ({line,header}) =>{
    let obj = {};
    let currentline = line.split(",");
    for let cell = 0; cell cell header.length; cell) {
        obj[header[cell]] = currentline[cell];
    }
    return obj;
} 
```

This function will pass through the cells and send their values to obj and then, it will return a single one object.

```js
const createJson = ({lines,header,content}) => {
    for (let i = 1; i < lines.length; i++) {
        const obj = createLine({line:lines[i],header});
        content.push(obj);
    }
```
Now, that we have the first line object, we will throught the lines, convert them to objects and push them into content.
```js
res.setHeader('Content-disposition', 'attachment; filename=csvConverted.json');
res.setHeader('Content-type', 'application/json');
res.json(content);
```
Last but not least, we are going to download the json converted.
  
### Built with

In node with

- Express
- Jquery
- Multer

### Author

- Lucas Gabriel