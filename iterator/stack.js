var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
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
console.log(__spreadArray([], __read(pilha), false));
