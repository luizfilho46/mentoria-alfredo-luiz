var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var Queue = /** @class */ (function () {
    function Queue() {
        this.fila = [];
    }
    Queue.prototype.push = function (number) {
        this.fila.push(number);
    };
    Queue.prototype.shift = function () {
        this.fila.shift();
    };
    Queue.prototype.size = function () {
        return this.fila.length;
    };
    Queue.prototype[Symbol.iterator] = function () {
        var index = 0;
        var arr = this.fila;
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
    return Queue;
}());
var novaFila = new Queue();
novaFila.fila = [360, 198, 300];
novaFila.push(90);
novaFila.push(35);
novaFila.push(34);
novaFila.push(56);
console.log("Tamanho inicial: " + novaFila.size());
novaFila.shift();
novaFila.shift();
console.log("Tamanho final: " + novaFila.size());
console.log(novaFila);
try {
    for (var novaFila_1 = __values(novaFila), novaFila_1_1 = novaFila_1.next(); !novaFila_1_1.done; novaFila_1_1 = novaFila_1.next()) {
        var numero = novaFila_1_1.value;
        console.log('Numero: ' + numero);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (novaFila_1_1 && !novaFila_1_1.done && (_a = novaFila_1.return)) _a.call(novaFila_1);
    }
    finally { if (e_1) throw e_1.error; }
}
