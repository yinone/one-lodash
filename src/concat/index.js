function concat() {
  const args = argumentsToArray(arguments)
  
  const length = args.length
  const arr = args[0]
  const baseArr = isArray(arr) ? arr : [arr]
  const values = new Array(length ? length - 1 : 0)
  let index = length
  
  while(index--) {
    values[index - 1] = args[index]
  }
  
  return length ? arrayPush(shallowCopy(baseArr), shallowFlat(values)) : []
}

function shallowFlat(arr) {
  if (!isArray(arr)) {
    return []
  }
  
  let result = []
  let resIndex = 0
  
  while(resIndex < arr.length) {
    result = arrayPush(result, arr[resIndex])
    resIndex++
  }
  
  return result
}

function shallowCopy(arr) {
  if (!isArray(arr)) {
    return []
  }
  
  
}

function deepCopy(arr) {
  
//   const result = []
  return arr
}

function arrayPush() {
  const args = argumentsToArray(arguments)
  
  if (!isArray(args[0])) {
    return []
  }
  
  
  const baseArr = deepCopy(args[0])
  const pushArr = deepCopy(args[1])
  
  let index = 0
  
  while(index < pushArr.length) {
    
    baseArr[baseArr.length + index] = pushArr[index]
    index++
  }
  
  console.log(baseArr)
  return baseArr
}

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
  
  console.log(result)
  return result
}

function isArguments(arg) {
  return Object.prototype.toString.call(arg) === '[object Arguments]'
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

function isArrayLike() {
  
}

function isObject() {
  
}

function isObjectLike() {
  
}

shallowFlat([1,2])