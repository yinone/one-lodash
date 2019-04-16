/**
  *  Creates an array of array values not included in the other given arrays 
  *   using SameValueZero for equality comparisons. The order and references 
  *   of result values are determined by the first array.
  *    
  *  @param {Array} array The array to inspect
  *  @param {...Array} values The values to exclude
  *  @returns {Array} return `array`
  **/

import isArray from '../lang/isArray'
import toArray from '../lang/argumentsToArray'
import baseFlat from '../baseFlat'

function difference(array, [values]) {

  const arr = toArray(arguments)
  const baseArr = arr[0]
  const values = arr[1]

  if (!isArray(baseArr)) {
    return []
  }
  
  
}

export default difference