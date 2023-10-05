const fs = require('fs');
const process = require('process')

function cat(path){
    fs.readFile(path,'utf8',function(err,data){
        if(err) {
            console.log(`Error reading:${path}: ${err}`)
            process.exit(1);
        }else{
            console.log(data)
        }
    })

}


  
  cat (process.argv[2]);



  //a different approach:


// const fs = require('fs');
// const process = require('process');

// function cat(path) {
//   fs.readFile(path, 'utf8', function (err, data) {
//     if (err) {
//       console.log(`Error reading: ${path}: ${err}`);
//       process.exit(1);
//     } else {
//       console.log(data);
//     }
//   });
// }

// if (process.argv.length !== 3) {
//   console.log('Usage: node yourScript.js <path>');
//   process.exit(1);
// }

// const filePath = process.argv[2];
// cat(filePath);

