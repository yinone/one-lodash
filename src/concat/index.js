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
    const item = arr[resIndex]
    
    if (isArray(item)) {
      result = shallowFlat(item)
    } else {
      
      result[resIndex] = item
    }
    
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
  
  const result = []
  return result
}

function arrayPush() {
  const args = argumentsToArray(arguments)
  
  if (!isArray(args[0])) {
    return []
  }
  
  const baseArr = deepCopy(args[0])
  const pushArr = deepCopy(args[1])
  
  const length = args.length
  const result = new Array(length)
  let index = 0
  
  while(index < pushArr.length) {
    
    baseArr[baseArr.length + index] = pushArr[index]
    index++
  }
  return result
}

function argumentsToArray(arg) {
  
  if (!isArguments(arg)) {
    return []
  }
  
  const result = new Array(arg.length)
  let resIndex = 0
  while(resIndex < arg.length) {
    result[resIndex] = arg[result]
    
    resIndex++
  }
  
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

isArray(new Array())
concat([1,2], 1,2,3,4,5, [[[5]]], {})