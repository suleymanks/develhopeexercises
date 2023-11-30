const fs = require('fs');

const filePath = 'example.txt';
const fileContent = 'Hello, this is exercise of node 07!' 

fs.writeFile(filePath, fileContent, (err) =>{
    if(err){
        console.error('Error writing file: ', err)
    } else {
        console.log('File has succesfully written')
    }
})