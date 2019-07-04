/**
  *  Creates an array of array values not included in the other given arrays 
  *   using SameValueZero for equality comparisons. The order and references 
  *   of result values are determined by the first array.
  *    
  *  @param {Array} array - The array to inspect
  *  @param {...Array} values - The values to exclude
  *  @param {Function} [iteratee = _.identity] - The iteratee invoked per element of array and values
  *  @returns {Array} - return new array
  *  @example
  *  differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor) => [1.2]
  *  difference([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x') => [{'x': 2}]
  */

 import isArray from '../../lang/isArray'
 import baseFlat from '../baseFlat'
 
 function differenceBy(arr, ...values, iteratee) {
 
  if (!isArray(arr)) {
    return []
  }
  
  if (!values) {
    return arr
  }

  let baseArr = baseFlat(values) //todo recursion flat
  const retArr = []

  if (iteratee) {
    arr = arr.map(iteratee)
    baseArr = baseArr.map(iteratee)
  }

  let i = 0

  while(i < arr.length) {
    if (!baseArr.includes(arr[i])) {

      // includes use SameValueZero to compare
      retArr.push(arr[i])
    }

    i++
  }

  return retArr
}
 
export default differenceBy