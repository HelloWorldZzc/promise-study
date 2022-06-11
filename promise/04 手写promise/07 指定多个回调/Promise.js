
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
}