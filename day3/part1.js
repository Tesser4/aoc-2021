
import parse from './parse.js'

const solvePart1 = (fileData) => {
  const diagnosticReport = parse(fileData)
  const gammaRateBits = diagnosticReport
    .reduce((a, c) => {
      [...c].forEach((bit, i) => a[i] += Number(bit))
      return a
    }, Array(diagnosticReport[0].length).fill(0))
    .map(x => x * 2 > diagnosticReport.length ? '1' : '0')
  const epsilonRateBits = gammaRateBits
    .map(x => x === '1' ? '0' : '1')

  return parseInt(gammaRateBits.join(''), 2) * parseInt(epsilonRateBits.join(''), 2)
}

export default solvePart1
