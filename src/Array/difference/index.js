/**
  *  Creates an array of array values not included in the other given arrays 
  *   using SameValueZero for equality comparisons. The order and references 
  *   of result values are determined by the first array.
  *    
  *  @param {Array} array The array to inspect
  *  @param {...Array} values The values to exclude
  *  @returns {Array} return `array`
  *  @examples
  *  
  *  difference([2,3],[1,3]) => [1]
  *  difference([2, 2, 2, -0], [0, 2, 3]) => []
  **/

import isArray from '../../lang/isArray'

function difference(arr, ...values) {

  if (!isArray(arr)) {
    return []
  }
  
  if (!values) {
    return arr
  }

  const retArr = []
  const baseArr = values.flat() //todo recursion flat
  let i = 0

  while(i < arr.length) {
    if (!baseArr.includes(arr[i])) {

      // includes use SameValueZero to compare
      retArr.push(arr[i])
    }

    i++
  }

  return retArr
}

export default difference