const fs = require('fs');

var filenames = fs.readdirSync('.')

for(var i = 0; i < filenames.length; i++){
    filenames[i] = filenames[i].substr(14, filenames[i].length - (14 + 4)); // length of prefix + suffix
}

console.log(filenames)
