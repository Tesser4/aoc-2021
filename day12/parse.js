
const nl = '\r\n'

const parse = (fileData) => fileData
  .trim()
  .split(nl)
  .map(line => line.split('-'))
  .reduce((a, [c0, c1]) => {
    c0 in a
      ? a[c0].push(c1)
      : a[c0] = [c1]
    c1 in a
      ? a[c1].push(c0)
      : a[c1] = [c0]
    return a
  }, {})

export default parse
