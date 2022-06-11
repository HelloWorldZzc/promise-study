//读取文本的内容
// 使用回调函数的形式
// const fs = require('fs');
// const p = new Promise((resolve, reject) => {
//     fs.readFile('./content.txt', (err, data) => {
//         if (err) {
//             reject(err);
//         } else {
//             resolve(data);
//         }
//     });
// });
// p.then(data => {
//     console.log(data.toString());
// }, err => {
//     console.log(err);
// });

// 使用工具库
const fs = require('fs');
const util = require('util');
// 在promise的基本使用中有，将一个函数封装成promise的形式
const test = util.promisify(fs.readFile);

// 使用async和await的形式
async function readFile() {
    try {
        let data1 = await test("./content.txt");
        let data2 = await test("./content.txt");
        let data3 = await test("./content.txt");
        console.log(data1 + data2 + data3);
    }
    catch (err) {
        console.log(err);
    }
}
readFile();