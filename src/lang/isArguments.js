function isArguments(arg) {
  return Object.prototype.toString.call(arg) === '[object Arguments]'
}

export default isArguments