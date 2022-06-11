
function Promise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    resolve = (data) => {
        this.PromiseState = "resolved";
        this.PromiseResult = data;

    }
    reject = (data) => {
        this.PromiseState = "reject";
        this.PromiseResult = data;
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

}