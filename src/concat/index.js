
function isArguments(arg) {
  return Object.prototype.toString.call(arg) === '[object Arguments]'
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

/**
  * transform arguments obejct to array
  *  @param {Object} Arguments Object
  *  @returns {Array} result return `array`
  *
  **/

function argumentsToArray(arg) {
  
  if (!isArguments(arg)) {
    return []
  }
  
  const result = new Array(arg.length)
  let resIndex = 0
  
  while(resIndex < arg.length) {
    result[resIndex] = arg[resIndex]
    
    resIndex++
  }
  
  return result
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

/**
  *  append values to array
  *  @param {Array} array The array to modify
  *  @param {Array} values the values to append
  *  @returns {Array} return `array`
  */

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

// arrayPush([], [1,2,3, [4], [[5]]])

/**
  *  shallow copy array
  *  @param {Array} arr The array to copy
  *  @returns {Array}  return the new array
  *
  **/

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

exports.shallowCopy = shallowCopy
exports.arrayPush = arrayPush
exports.baseFlat= baseFlat
exports.concat = concat
