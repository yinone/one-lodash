/**
  *  Fills elements of array with value from start up to, but not including, end.
  *    
  *  @param array (Array): The array to fill.
  *  @param value (*): The value to fill array with.
  *  @param [start=0] (number): The start position.
  *  @param [end=array.length] (number): The end position.
  *  @returns {Array} return result
  *  @example
  *   
  *   var array = [1, 2, 3];
  *
  *   fill(array, 'a') => ['a', 'a', 'a']
  *   fill(Array(3), 2) => [2, 2, 2]
  *   fill([4, 6, 8, 10], '*', 1, 3) => [4, '*', '*', 10]
  * 
  **/


 
 function fill() {
 
  const arr = toArray(arguments)
  const baseArr = arr[0]
  const filled = arr[1]
  const start = arr[2]
  const end = arr[3]

  let resIndex = 0
  let endIndex = baseArr.length

  if (start) {
    resIndex = start
  }

  if (end) {
    endIndex = end
  }
  
  while(resIndex < end) {

    baseArr[resIndex] = filled

    resIndex++
  }

  return baseArr
 }
 
 export default fill