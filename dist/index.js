'use strict';

/* @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
// normal
function chunk(array, size) {
  if (!Array.isArray(array)) {
    return;
  }

  if (!size || !array.length) {
    return [];
  }

  var chunkArray = [];

  while (array.length) {
    if (Math.max(array.length, 1) <= size) {
      chunkArray.push(array);
      return chunkArray;
    }

    chunkArray.push(array.splice(0, size));
  }

  return chunkArray;
} // lodash

/*
  * Creates an array with all falsey values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.
  * @param {Array} array The array to compact
  * @returns {Array} Return the new array of filtered values
  * @example
  * 
  *  const array = [1,2,3,0,null,false,undefined,NaN,'']
  *  _compact(array) => [1,2,3]
  */
// normal
function compact(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.filter(function (item) {
    return !!item;
  });
} // lodash

function isArguments(arg) {
  return Object.prototype.toString.call(arg) === '[object Arguments]';
}

/**
  * transform arguments obejct to array
  *  @param {Object} Arguments Object
  *  @returns {Array} result return `array`
  *
  **/

function argumentsToArray(arg) {
  if (!isArguments(arg)) {
    return [];
  }

  var result = new Array(arg.length);
  var resIndex = 0;

  while (resIndex < arg.length) {
    result[resIndex] = arg[resIndex];
    resIndex++;
  }

  return result;
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

/**
  *  shallow copy array
  *  @param {Array} arr The array to copy
  *  @returns {Array}  return the new array
  *
  **/

function shallowCopy(arr) {
  if (!isArray(arr)) {
    return [];
  }

  var result = [];
  var resIndex = 0;

  while (resIndex < arr.length) {
    result[resIndex] = arr[resIndex];
    resIndex++;
  }

  return result;
}

/**
  *  append values to array
  *  @param {Array} array The array to modify
  *  @param {Array} values the values to append
  *  @returns {Array} return `array`
  */

function arrayPush(array, values) {
  if (!isArray(array) || !isArray(values)) {
    return [];
  }

  var length = values.length;
  var offsetIndex = array.length;
  var index = 0;

  while (index < length) {
    array[offsetIndex + index] = values[index];
    index++;
  }

  return array;
}

/**
  *  flat array
  *  @param {Array} arr The array to flat
  *  @returns {Array} return `result`
  *  @example
  *  
  *  const arr = [1,2,3, [4,5], [[2], 3]]
  *  baseFlat(arr) => [1,2,3,4,5,[2],3]
  *
  */

function baseFlat(arr) {
  if (!isArray(arr)) {
    return [];
  }

  var result = [];
  var resIndex = 0;

  while (resIndex < arr.length) {
    var values = arr[resIndex];

    if (isArray(values)) {
      result = arrayPush(result, values);
    } else {
      result[resIndex] = values;
    }

    resIndex = result.length;
  }

  return result;
}

/**
  *  concat array
  *  @param {Array} array The array to concatenate
  *  @param {*}  values The values to concatenate
  *  @returns {Array} return the new array
  *  @example
  *  
  *  concat([], 2, [3], [[2,5]]) => [2,5, [2,5]]
  **/

function concat() {
  var args = argumentsToArray(arguments);
  var length = args.length;
  var arr = args[0];
  var baseArr = isArray(arr) ? arr : [arr];
  var value = new Array(length ? length - 1 : 0);
  var index = length;

  while (index--) {
    value[index - 1] = args[index];
  }

  return length ? arrayPush(shallowCopy(baseArr), baseFlat(value)) : [];
}

/**
 *  Fills elements of array with value from start up to, but not including, end.
 *
 *  @param array (Array): The array to fill.
 *  @param value (*): The value to fill array with.
 *  @param [start=0] (number): The start position.
 *  @param [end=array.length] (number): The end position.
 *  @returns {Array} return result
 *  @example
 *
 *   var array = [1, 2, 3];
 *
 *   fill(array, 'a') => ['a', 'a', 'a']
 *   fill(Array(3), 2) => [2, 2, 2]
 *   fill([4, 6, 8, 10], '*', 1, 3) => [4, '*', '*', 10]
 *
 **/

function fill() {
  var arr = argumentsToArray(arguments);
  var baseArr = arr[0];
  var filled = arr[1];
  var arrLen = baseArr.length;
  var start = arr[2] ? arr[2] : 0;
  var end = arr[3] || arr[3] === 0 ? arr[3] : arrLen;

  if (!filled || !arrLen || start >= arrLen || end < 0) {
    return [];
  }

  if (start < 0) {
    start = arrLen + start;
  }

  if (end > arrLen) {
    end = arrLen;
  }

  while (start < end) {
    baseArr[start++] = filled;
  }

  return baseArr;
}

var index = {
  chunk: chunk,
  compact: compact,
  concat: concat,
  fill: fill
};

module.exports = index;
//# sourceMappingURL=index.js.map
