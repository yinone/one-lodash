/** 
  * create a slice of array with n elements from the beginning
  * 
  * @param {Array} array: The Array to query
  * @param {Number} [n=1]: The number of elements to drop
  * @returns {Array} result: Returns the slice of array
  * @example
  * 
  * drop([1, 2, 3]) => [2, 3]
  * drop([1, 2, 3], 3) => []
  *
  **/

import isUndefined from '../../lang/isUndefined'

function drop(array, n) {
  const len = array && array.length
  
  n = isUndefined(n) ? 1 : n
  
  if (!len || n < 0 || n > len ) {
    return []
  }

  const result = new Array(len-n)
  let resIndex = 0
  while(n < len) {
    result[resIndex++] = array[n++]
  }

  return result
}

  export default drop