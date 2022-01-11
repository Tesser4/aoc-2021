
const parse = (fileData) => fileData
  .trim()
  .split('')
  .map(hexDigit => parseInt(hexDigit, 16).toString(2).padStart(4, '0'))
  .join('')

export default parse
