var ListaEncadeada = /** @class */ (function () {
  function ListaEncadeada(valor) {
    this.tamanhoLista = 0;
    this.item = valor === undefined ? null : valor;
    this.proximo = null;
    this.tamanhoLista++;
  }
  ListaEncadeada.prototype.push = function (valor) {
    if (!this.item) this.item = valor;
    else if (!this.proximo) {
      this.proximo = new ListaEncadeada(valor);
    } else {
      var current = this.proximo;
      while (current === null || current === void 0 ? void 0 : current.proximo) {
        current = current.proximo;
      }
      current.proximo = new ListaEncadeada(valor);
    }
    this.tamanhoLista++;
  };
  ListaEncadeada.prototype.shift = function () {
    var _a, _b, _c;
    if (((_a = this.proximo) === null || _a === void 0 ? void 0 : _a.item) && this.proximo.proximo) {
      this.item = (_b = this.proximo) === null || _b === void 0 ? void 0 : _b.item;
      this.proximo = (_c = this.proximo) === null || _c === void 0 ? void 0 : _c.proximo;
    } else {
      this.item = null;
      this.proximo = null;
    }
    this.tamanhoLista > 0 ? this.tamanhoLista-- : this.tamanhoLista;
  };
  ListaEncadeada.prototype.pop = function () {
    if (this.item && this.proximo) {
      var current = this.proximo;
      var previous = null; // Adicionar uma referência para o nó anterior
      while (current.proximo) {
        previous = current; // Salvar o nó atual como o nó anterior antes de avançar
        current = current.proximo;
      }
      if (previous) {
        previous.proximo = null; // Remover a referência ao último nó da lista
      } else {
        this.proximo = null; // Se não houver nó anterior, significa que a lista tem apenas um nó
      }
    } else {
      this.item = null;
      this.proximo = null;
    }
    this.tamanhoLista > 0 ? this.tamanhoLista-- : this.tamanhoLista;
  };
  ListaEncadeada.prototype.removeItem = function (item) {
    if (this.item === item) {
      if (this.proximo) {
        this.item = this.proximo.item;
        this.proximo = this.proximo.proximo;
      } else {
        this.item = null;
      }
    } else {
      var current = this.proximo;
      var previous = this.proximo;
      while (current) {
        if (current.item === item) {
          if (previous) {
            previous.proximo = current.proximo;
          }
          break; // Achamos o item, então saímos do loop
        }
        previous = current;
        current = current.proximo;
      }
    }
  };
  ListaEncadeada.prototype.tamanho = function () {
    return this.tamanhoLista;
  };
  ListaEncadeada.prototype[Symbol.iterator] = function () {
    var itemValor = this.item;
    var current = this.proximo;
    return {
      next: function () {
        if (itemValor) {
          var value = itemValor;
          if (current) {
            itemValor = current.item;
            current = current === null || current === void 0 ? void 0 : current.proximo;
          } else itemValor = null;
          return { value: value, done: false };
        }
        return { value: null, done: true };
      },
    };
  };
  return ListaEncadeada;
})();
var lista = new ListaEncadeada(1);
lista.push(20);
lista.push(200);
lista.push(25);
lista.removeItem(20);
console.log.apply(console, lista);
console.log('tamanho da lista: ' + lista.tamanho());
