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

export default argumentsToArray