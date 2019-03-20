/* @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */

// normal
function chunk(array, size) {
  
  if (!Array.isArray(array)){
    return 
  }
  
  if (!size || !array.length) {
    return []
  }
 
  const chunkArray = []
  
  while(array.length) {
    
    if (Math.max(array.length, 1) <= size) {
      chunkArray.push(array)
      return chunkArray
    }
    
    chunkArray.push(array.splice(0, size))
   
  }
  
  return chunkArray
}

// lodash
function _chunk(array, size) {
  
  size = Math.max(size, 0);
  const length = array == null ? 0 : array.length
  
  if (size < 1 || !length) {
    return []
  }
  
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }
  return result
}

module.exports = chunk