// const fs = require('fs');
// console.log(fs)
//
const fs = require('fs');

//回调函数 形式
// fs.readFile('content.txt', (err, data) => {
//     // 如果出错 则抛出错误
//     if (err) throw err;
//     //输出文件内容
//     console.log(data.toString());
// });
//使用promise的形式进行此操作
const p = new Promise((resolve, reject) => {
    fs.readFile('content.txt', (err, data) => {
        if (err) reject(err);
        resolve(data);
    });
});
p.then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason)
});