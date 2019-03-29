/**
  *  shallow copy array
  *  @param {Array} arr The array to copy
  *  @returns {Array}  return the new array
  *
  **/

import isArray from '../../lang/isArray'

function shallowCopy(arr) {
  if (!isArray(arr)) {
    return []
  }
  
  const result = []
  let resIndex = 0
  
  while(resIndex < arr.length) {
    result[resIndex] = arr[resIndex]
    resIndex++
  }
  return result
}

export default shallowCopy