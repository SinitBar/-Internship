const { SHA3 } = require("sha3");
const filestream = require('fs');
const dataFolder = './task2';
var listOfHexStrings = [];
var hash = new SHA3(256);
getHexesOfFilesContent(dataFolder, listOfHexStrings);
listOfHexStrings.sort();
var resString = "";
listOfHexStrings.forEach(element => { resString += element; })
console.log(resString.length);
resString += "varka.sinitsckaya@yandex.ru";
console.log(hash.update(resString).digest("hex"));
function getHexesOfFilesContent(dataFolder, resultHexesList) {
    filestream.readdirSync(dataFolder).forEach(filename => {
        pushHexOfFileContentToList(filename, dataFolder, resultHexesList);
    });
}
function pushHexOfFileContentToList(filename, dataFolder, hexesList) {
    var resolvedPath = filestream.realpathSync(dataFolder + '/' + filename);
    const buffer = filestream.readFileSync(resolvedPath);
    hexesList.push(hash.update(buffer).digest("hex"));
    hash.reset();
}

















// hexesList.push(hash.update(filename).digest("hex"));
// hash.reset();


//const FileReader = require('filereader');
//const fileReader = new FileReader();

        //console.log(buffer.toString('utf-8'));
        //const filedataInString =  filestream.readFileSync(resolvedPath, 'utf-8');
////////////////////////////////////////////////////
// filestream.readdirSync(dataFolder, (error, files) => {
//     if (error) return console.log(error);
//     files.forEach(file => { 
//         filestream.realpath(dataFolder+'/'+file, (err, resolvedPath) => {
//             if (err) {console.log(e); return;}
//             fileReader.readAsText(resolvedPath);
//             list.push((new SHA3(256)).update((fileReader.result).digest("hex"))); 
//         });
//     });
// });

// var hash = new SHA3(256);

// list.sort();
// list.forEach(element => { hash.update(element); })
// hash.update("varka.sinitsckaya@yandex.ru"); 
// console.log(hash.digest("hex"));


////////////////////////////////////////////////////////////////////////


//var FileList = require('filereader');
//const dt = new DataTransfer();
//var realPaths = [];
// filestream.readFile(dataFolder+'/'+file, (err, data) => {
        //     if (err) {console.log(err); return;}
            //dt.items.add(resolvedPath);
           // realPaths.push(resolvedPath);
            //console.log(resolvedPath);
            //fileReader.readAsText(resolvedPath); //fileReader.result

            // var fileContent = filestream.readFileSync(resolvedPath);
            // list.push((new SHA3(256)).update(fileContent.digest("hex"))); 

// list.sort();
// list.push((new SHA3(256)).update("varka.sinitsckaya@yandex.ru").digest("hex")); 
// list.forEach(element => { hash.update(element); })
// console.log(hash.digest("hex"));

        // filestream.readFile(dataFolder + '/' + file, (err, data) => {
        //     if(err) return console.log(err);
        //     list.push((new SHA3(256)).update(data).digest("hex"));
        //     //console.log(data.toString());
        // });
        //console.log(dataFolder+'/'+file);
        //list.push((new SHA3(256)).update((fileReader.readAsText(way).result).digest("hex")));
        // })
        //filestream.realpath(file)
        //list.push((new SHA3(256)).update(fileReader.readAsText(dataFolder+'/'+file).digest("hex"))); 
        // filestream.realpath(dataFolder+'/'+file, (err, resolvedPath) => {
        //     if(err) return console.log(err);
        //     list.push((new SHA3(256)).update(fileReader.readAsText(resolvedPath.file).digest("hex"))); 
        // });
        //list.push((new SHA3(256)).update(fileReader.re(new File(dataFolder + '/' + file))).digest("hex")); 
        //var fileList = dt.files; //new FileList(realPaths);
// fileList.array.forEach(file => {
//     fileReader.readAsText(file);
//     if (fileReader.DONE)
//     { list.push((new SHA3(256)).update((fileReader.result).digest("hex"))); }
//     else console.log("ran away!");
// });