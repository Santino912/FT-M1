"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1];
  let count = num;
  while (arr.reduce((act, sig) => act * sig) < count) {
    if (num / 2 == Math.round(num / 2)) {
      num /= 2;
      arr.push(2);
    } else if (num / 3 == Math.round(num / 3)) {
      num /= 3;
      arr.push(3);
    } else if (num / 5 == Math.round(num / 5)) {
      num /= 5;
      arr.push(5);
    } else {
      arr.push(num);
      num /= num;
    }
  }
  return arr;
}

function bubbleSort(array, count = array.length - 1) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let i = 0;
  let save;
  while (count < array.length && count > 0) {
    if (array[i] > array[i + 1]) {
      save = array[i + 1];
      array[i + 1] = array[i];
      array[i] = save;
      i++;
    } else if (array[i] <= array[i + 1]) {
      i++;
      count--;
    } else {
      count--;
      return bubbleSort(array, count);
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let o = i - 1;
    let aux = array[i];
    while (o >= 0 && array[o] > aux) {
      array[o + 1] = array[o];
      o--;
    }
    array[o + 1] = aux;
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
