class Stack<T> {
  private stack: T[];
   constructor() {
     this.stack = [];
   }
   push(item: T) {
     this.stack.push(item);
   }
   pop() {
     this.stack.pop();
   }
 
   size() {
     return this.stack.length;
   }
   peek() {
     return [this.stack[this.stack.length - 1]];
   }
 
   [Symbol.iterator](): Iterator<T> {
     let index: number = 0;
     const arr = this.stack;
     return {
       next: (): IteratorResult<T> => {
         if (arr[index] !== undefined) {
           let value = arr[index];
           index++;
           return { value, done: false };
         } else return { value: undefined, done: true };
       },
     };
   }
 }
 
 const pilha = new Stack<Number>();
 pilha.push(10);
 pilha.push(20);
 console.log(pilha);
 console.log("topo da pilha: "+ pilha.peek())
 console.log("tamanho da pilha: "+pilha.size())
 pilha.pop()
 pilha.pop()
 console.log([...pilha]);
 