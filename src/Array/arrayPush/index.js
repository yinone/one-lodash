/**
  *  append values to array
  *  @param {Array} array - The array to modify
  *  @param {Array} values - the values to append
  *  @returns {Array} - return `array`
  */

import isArray from '../../lang/isArray'

function arrayPush(array, values) {
   
  if (!isArray(array) || !isArray(values)) {
    return []
  }
  
  const length = values.length
  const offsetIndex = array.length
  let index = 0
  
  while(index < length) {
    array[offsetIndex + index] = values[index]
    index++
  }
  
  return array
}

export default arrayPush