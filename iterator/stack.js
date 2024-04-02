var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.push = function (item) {
        this.stack.push(item);
    };
    Stack.prototype.pop = function () {
        this.stack.pop();
    };
    Stack.prototype.size = function () {
        return this.stack.length;
    };
    Stack.prototype.peek = function () {
        return [this.stack[this.stack.length - 1]];
    };
    Stack.prototype[Symbol.iterator] = function () {
        var index = 0;
        var arr = this.stack;
        return {
            next: function () {
                if (arr[index] !== undefined) {
                    var value = arr[index];
                    index++;
                    return { value: value, done: false };
                }
                else
                    return { value: undefined, done: true };
            },
        };
    };
    return Stack;
}());
var pilha = new Stack();
pilha.push(10);
pilha.push(20);
console.log(pilha);
console.log("topo da pilha: " + pilha.peek());
console.log("tamanho da pilha: " + pilha.size());
pilha.pop();
pilha.pop();
console.log(__spreadArray([], pilha, true));
