const fs = require('fs');

var filenames = fs.readdirSync('.')

for(var i = 0; i < filenames.length; i++){
    filenames[i] = '    - assets/audio/' + filenames[i];
}

fs.writeFileSync('result.txt', filenames.join('\n'));

//console.log(filenames);
