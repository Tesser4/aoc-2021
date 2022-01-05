
const nl = '\r\n'

const parse = (fileData) => fileData
  .trim()
  .split(nl)
  .map(line => line.split(''))
  .map(line => line.map(Number))

export default parse
