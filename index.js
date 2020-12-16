/*
 Author William H.
 Desription: This is a simple example of
    a function that can read a file in a stream of data,
    then print the data to the console.
*/

// Must require module for working with the filesystem
const fs = require('fs')

let streamfunc = (source, output=process.stdout) => {
 const stream = fs.createReadStream(__dirname +'/'+ source)
 stream.pipe(output)
}

// Just enter the file name
// The 'source' arg must be in ./ 
streamfunc('data.json')


