"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let result = 0;
  let count = num.split("").length - 1;
  num.split("").forEach((number) => {
    result += parseInt(number, 0) * 2 ** count;
    count--;
  });
  return result;
}

function DecimalABinario(num) {
  // tu codigo aca
  return num.toString(2);
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
