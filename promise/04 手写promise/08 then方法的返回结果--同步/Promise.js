
function Promise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    this.callbacks = [];
    resolve = (data) => {
        // 属性值了被修改一次
        if (this.PromiseState !== 'pending') return;
        this.PromiseState = "resolved";
        this.PromiseResult = data;
        // 执行回调
        this.callbacks.forEach(item => {
            item.onResolved(data);
        })

    }
    reject = (data) => {
        if (this.PromiseState !== 'pending') return;
        this.PromiseState = "reject";
        this.PromiseResult = data;
        // 执行回调--->多个回调
        this.callbacks.forEach(item => {
            item.onRejected(data);
        })

    }
    //执行 同步调用『执行器函数』
    try {
        executor(resolve, reject);
    }
    catch (e) {
        reject(e);
    }
}
//添加 then 方法
Promise.prototype.then = function (onResolved, onRejected) {
    // then 方法的返回值是一个新的promise对象
    return new Promise((resolve, reject) => {
        if (this.PromiseState == "resolved") {
            try {
                // 获取回调函数的执行结果
                let result = onResolved(this.PromiseResult);
                // 如果是promise对象 说明需要依据promise的值来判断成功与失败
                if (result instanceof Promise) {
                    result.then(v => {
                        resolve(v);
                    }, r => { reject(r) })
                }
                else {
                    // 否则直接返回-->不是promise对象其他都hi返回成功
                    resolve(result);
                }
            }
            catch (e) {
                // 如果报错了 就返回错误
                reject(e);
            }
        }

        //调用回调函数 promiseState
        if (this.PromiseState = "resolved") {
            onResolved(this.PromiseResult);
        }
        if (this.PromiseState = "reject") {
            onRejected(this.PromiseResult);
        }
        // 调用then了但是属性没有发生改变还是pending状态
        if (this.PromiseState = "pending") {
            this.callbacks.push({
                onResolved: onResolved,
                onRejected: onRejected
            });
        }
    })
}