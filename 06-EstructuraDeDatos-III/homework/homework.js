"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

//size: retorna la cantidad total de nodos del árbol
BinarySearchTree.prototype.size = function () {
  if (this.left == null && this.right == null) return 1;
  if (this.left == null && this.right !== null) return 1 + this.right.size();
  if (this.left !== null && this.right == null) return 1 + this.left.size();
  if (this.left && this.right) return 1 + this.right.size() + this.left.size();
};

//insert: agrega un nodo en el lugar correspondiente
BinarySearchTree.prototype.insert = function (num) {
  let a = new BinarySearchTree(num);
  if (num < this.value) {
    this.left === null ? (this.left = a) : this.left.insert(num);
  } else if (num > this.value) {
    this.right === null ? (this.right = a) : this.right.insert(num);
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value == value) return true;
  if (this.value > value) {
    if (this.left === null) return false;
    return this.left.contains(value);
  } else if (this.value < value) {
    if (this.right === null) return false;
    return this.right.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if (order == "pre-order") {
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb, order);
    if (this.right !== null) this.right.depthFirstForEach(cb, order);
  } else if (order === "post-order") {
    if (this.left !== null) this.left.depthFirstForEach(cb, order);
    if (this.right !== null) this.right.depthFirstForEach(cb, order);
    cb(this.value);
  } else {
    if (this.left !== null) this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if (this.right !== null) this.right.depthFirstForEach(cb, order);
  }
};

//breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  if (this.left) {
    array.push(this.left);
  }
  if (this.right) {
    array.push(this.right);
  }
  cb(this.value);
  if (array.length > 0) {
    array.shift().breadthFirstForEach(cb, array);
  }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
