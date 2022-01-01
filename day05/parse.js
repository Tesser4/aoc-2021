
const nl = '\r\n'

const parse = (fileData) => fileData
  .trim()
  .split(nl)
  .map(line => line.split(' -> '))
  .map(line => line.map(point => point.split(',')))
  .map(line => line.map(point => point.map(Number)))

export default parse
