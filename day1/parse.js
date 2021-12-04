
const nl = '\r\n'

const parse = (fileData) => fileData
  .trim()
  .split(nl)
  .map(Number)

export default parse
