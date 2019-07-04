/**
  *  flat array
  *  @param {Array} arr - The array to flat
  *  @returns {Array} - return `result`
  *  @example
  *  const arr = [1,2,3, [4,5], [[2], 3]]
  *  baseFlat(arr) => [1,2,3,4,5,[2],3]
  *
  */

import isArray from '../../lang/isArray'
import arrayPush from '../arrayPush'

//todo recursive flat
function baseFlat(arr) {
  
  if (!isArray(arr)) {
    return []
  }
  
  let result = []
  let resIndex = 0
  
  while(resIndex < arr.length) {
    
    const values = arr[resIndex]
    if (isArray(values)) {
      result = arrayPush(result, values)
      
    } else {
      
      result[resIndex] = values
    }
   
    resIndex = result.length
  } 
  
  return result
}

export default baseFlat