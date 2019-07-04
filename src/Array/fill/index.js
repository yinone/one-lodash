/**
 *  Fills elements of array with value from start up to, but not including, end.
 *
 *  @param {array} array - The array to fill.
 *  @param {*} value - The value to fill array with.
 *  @param {number} [start=0] - The start position.
 *  @param {number} [end=array.length] - The end position.
 *  @returns {array} - return result
 *  @example
 *
 *   var array = [1, 2, 3];
 *
 *   fill(array, 'a') => ['a', 'a', 'a']
 *   fill(Array(3), 2) => [2, 2, 2]
 *   fill([4, 6, 8, 10], '*', 1, 3) => [4, '*', '*', 10]
 *
 **/

import toArray from '../../lang/argumentsToArray'

function fill() {
  const arr = toArray(arguments)
  const baseArr = arr[0];
  const filled = arr[1];
  const arrLen = baseArr.length
  
  let start = arr[2] ? arr[2] : 0;
  let end = arr[3] || arr[3] === 0 ? arr[3] : arrLen
  
  if (!filled || !arrLen || start >= arrLen || end < 0) {
    return [];
  }
  
  if (start < 0) {
    start = arrLen + start
  }
  
  if (end > arrLen) {
    end = arrLen
  }

  while (start < end) {

    baseArr[start++] = filled;
  }

  return baseArr;
}

export default fill;
