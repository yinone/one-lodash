function concat() {
  const args = [...arguments]
//   const args = Array.from(arguments)
//   const args = [].slice.call(arguments)
  if (!args.length) {
    return []
  }
  
  const array = args[0]
  const values = args.slice(1)
  const result = []
  let resIndex = 0
  
  for (const value of values) {
    result[resIndex++] = value
  }
  
  return result
}

concat([1])