// File System
const fs = require('fs');
// Module that contains useful file system's functionallity
// All the methods are asynchronous by default BUT We can choose sync versions adding 'Sync' in the funcion name
// example: fs.rename() >> fs.renameSync()
/**
 * Read
 * Modify
 * Copy
 * Delete
 * Change Name
 */

// read directory
const directory = './built-in_modules/fs';

// fs.readdir( directory, (err, files)=>{
//     if(err) throw err;
//     console.log(files);
// });

const pathName = __dirname+'\\main.html';

// fs.readFile(
//     pathName,
//     'utf-8',
//     (err, content) => {
//         if(err) throw err;
//         console.log(content);
//     }
// );

const newPathName = __dirname+'\\main2.html';

// fs.rename(
//     pathName,
//     newPathName,
//     (err) => {
//         if(err) throw err;
//         console.log('File name changed successfully');
//     }
// );

// Add new content at the end of the file
const pathFile = __dirname+'\\main2.html';

const content = '<p>This is a new Line</p>';

// fs.appendFile(
//     pathFile,
//     content,
//     (err) => {
//         if(err) throw err;
//         console.log('File updated successfully!');
//     }
// );

// Replace all the file's content
fs.writeFile(
    pathFile,
    'new content',
    (err) => {
        if(err) throw err;
        console.log('File updated successfully!!');
    }
);

// Delete files
fs.unlink(
    __dirname+'\\index.html',
    (err) => {
        if(err) throw err;
        console.log('file deleted');
    }
);