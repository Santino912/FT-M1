class Stack {
  constructor() {
    this.stack = [];
  }
  agregarAStack(elemento) {
    this.stack.push(elemento);
  }
  sacarDeStack() {
    this.stack.pop();
  }
  verStack() {
    console.log(this.stack);
  }
}

let stack1 = new Stack();
stack1.agregarAStack(1);
stack1.agregarAStack(true);
stack1.agregarAStack("hola");

stack1.verStack();
