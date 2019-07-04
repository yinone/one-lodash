/**
  * Creates an array with all falsey values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.
  * @param {Array} array - The array to compact
  * @returns {Array} - Return the new array of filtered values
  * @example
  *  const array = [1,2,3,0,null,false,undefined,NaN,'']
  *  _compact(array) => [1,2,3]
  */

// normal
function compact(array) {
  if (!Array.isArray(array)) {
    return []
  }
  
  return array.filter(item => !!item)
}

// lodash
function _compact(array) {
  if (!Array.isArray(array)) {
    return []
  }
  
  const result = []
  let resIndex = 0
  
  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }
  
  return result
}

export default compact
