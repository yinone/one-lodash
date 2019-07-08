/**
 * Gets the last element of `array`
 * @param {array} array - The array of the query
 * @returns {*} - Returns the last element of `array`
 * @example
 * 
 * last([1,2,3]) => 3
 */

import isArray from '../../lang/isArray'

function last(array) {
  if (!isArray(array)) {
    throw new TypeError('the type of array is not Array')
  }
  const length = array === null ? 0 : array.length
  return length ? array[length -1] : undefined
}
export default last