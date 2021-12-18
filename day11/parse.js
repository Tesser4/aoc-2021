
const nl = '\r\n'

const parse = (fileData) => fileData
  .trim()
  .split(nl)
  .map(line => line.split(''))
  .map(line => line.map(x => Number(x)))

export default parse
