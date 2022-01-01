
import parse from './parse.js'

const solvePart1 = (fileData) => parse(fileData)
  .reduce((a, c) => 'prev' in a
    ? c > a.prev
      ? { prev: c, count: a.count + 1 }
      : { prev: c, count: a.count }
    : { prev: c, count: 0 }
    , {})
  .count

export default solvePart1
