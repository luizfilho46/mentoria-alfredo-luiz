var MyQueue = /** @class */ (function () {
    function MyQueue() {
        this.items = [];
    }
    MyQueue.prototype.push = function (x) {
        this.items.push(x);
    };
    MyQueue.prototype.pop = function () {
        return this.items.shift();
    };
    MyQueue.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    MyQueue.prototype.empty = function () {
        return this.items.length === 0;
    };
    return MyQueue;
}());
var novaFila = new MyQueue();
novaFila.push(9);
novaFila.push(8);
novaFila.push(8);
console.log(novaFila.peek());
console.log(novaFila.empty());
