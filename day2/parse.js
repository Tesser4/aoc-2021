
const nl = '\r\n'

const parse = (fileData) => fileData
  .trim()
  .split(nl)
  .map(line => line.split(' '))
  .map(([direction, value]) => ({ direction, value: Number(value) }))

export default parse
