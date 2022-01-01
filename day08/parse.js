
const nl = '\r\n'

const parse = (fileData) => fileData
  .trim()
  .split(nl)
  .map(line => line.split(' | '))
  .map(line => line.map(x => x.split(' ')))
  .map(([signals, digits]) => ({ signals, digits }))

export default parse
