const unti = require('util');
const fs = require('fs');
let f = unti.promisify(fs.readFile);
f("./content.txt").then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
});

// 使用promise进行封装
// const fs = require('fs');
// function f(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, (err, data) => {
//             if (err) reject(err);
//             resolve(data);
//         });
//     });
// }
// f("./content.txt").then(data => {
//     console.log(data.toString());
// }, reason => {
//     console.log(reason);
// });

// until-promisify方法
// until是node.js中的一个工具函数
// until.promisify它可以将一个回调函数转换成一个promise对象

// 采用遵循常见的错误优先的回调风格的函数（也就是将 (err, value) => ... 回调作为最后一个参数），并返回一个返回 promise 的版本。

