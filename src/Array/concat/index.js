/**
  *  concat array
  *  @param {Array} array The array to concatenate
  *  @param {*}  values The values to concatenate
  *  @returns {Array} return the new array
  *  @example
  *  
  *  concat([], 2, [3], [[2,5]]) => [2,5, [2,5]]
  **/

import argumentsToArray from '../../lang/argumentsToArray'
import isArray from '../../lang/isArray'
import shallowCopy from './shallowCopy'
import baseFlat from  './baseFlat'

function concat() {
  const args = argumentsToArray(arguments)
  
  const length = args.length
  const arr = args[0]
  const baseArr = isArray(arr) ? arr : [arr]
  const value = new Array(length ? length - 1 : 0)
  let index = length
  
  while(index--) {
    value[index - 1] = args[index]
  }
  
  return length ? arrayPush(shallowCopy(baseArr), baseFlat(value)) : []
}


export default concat
