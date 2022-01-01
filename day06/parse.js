
const parse = (fileData) => fileData
  .trim()
  .split(',')
  .map(Number)

export default parse
