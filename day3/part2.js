
const nl = '\r\n'
const parse = (fileData) => fileData
  .trim()
  .split(nl)

const getMostCommonGauge = (reportPart, index) => reportPart
  .reduce((a, c) => {
    a += c[index] === '1' ? 1 : -1
    return a
  }, 0)

const getFilteredReport = (type) => (report, i) => {
  const bits = { oxy: ['1', '0'], co2: ['0', '1'] }
  const [bit1, bit2] = bits[type]
  const common = getMostCommonGauge(report, i)
  return report.filter(nums => {
    if ((common >= 0 && nums[i] === bit1) || (common < 0 && nums[i] === bit2))
      return nums
  })
}

const getFilteredReportOxy = getFilteredReport('oxy')
const getFilteredReportCo2 = getFilteredReport('co2')

const solvePart2 = (fileData) => {
  const diagnosticReport = parse(fileData)
  let oxyGeneratorRating = [...diagnosticReport]
  let co2ScrubberRating = [...diagnosticReport]
  for (let i = 0; i < diagnosticReport[0].length; i += 1) {
    if (oxyGeneratorRating.length > 1)
      oxyGeneratorRating = getFilteredReportOxy(oxyGeneratorRating, i)
    if (co2ScrubberRating.length > 1)
      co2ScrubberRating = getFilteredReportCo2(co2ScrubberRating, i)
  }

  return parseInt(oxyGeneratorRating[0], 2) * parseInt(co2ScrubberRating[0], 2)
}

export default solvePart2
