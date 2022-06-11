const fs = require('fs');
function f(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

f("./content.txt").then(data => {
    console.log(data.toString());
}, reason => {
    console.log(reason);
});

// 使用promise进行封装