
const parse = (fileData) => fileData
  .trim()
  .split(': ')
  .filter((_, i) => i === 1)
  .flatMap(x => x.split(', '))
  .map(x => x.substring(2))
  .map(x => x.split('..'))
  .flatMap(x => x.map(Number))

export default parse
