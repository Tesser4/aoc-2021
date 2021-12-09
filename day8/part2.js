
import parse from './parse.js'

const isUnique = (signal) => signal.length < 5 || 6 < signal.length
const sortSignal = (signal) => [...signal].sort().join('')

const getUniqueNum = (signal) => {
  if (signal.length === 2)
    return '1'
  if (signal.length === 3)
    return '7'
  if (signal.length === 4)
    return '4'
  if (signal.length === 7)
    return '8'
}

const getNonUniqueNumUnloaded = (signalFour, signalSeven) => (signal) => {
  const setFour = new Set(signalFour)
  const setSeven = new Set(signalSeven)
  for (const char of signal) {
    setFour.add(char)
    setSeven.add(char)
  }
  if (signal.length === 5) {
    if (setFour.size === 7 && setSeven.size === 6)
      return '2'
    if (setFour.size === 6 && setSeven.size === 5)
      return '3'
    if (setFour.size === 6 && setSeven.size === 6)
      return '5'
  }
  if (signal.length === 6) {
    if (setFour.size === 7 && setSeven.size === 6)
      return '0'
    if (setFour.size === 7 && setSeven.size === 7)
      return '6'
    if (setFour.size === 6 && setSeven.size === 6)
      return '9'
  }
}

const solvePart2 = (fileData) => {
  const notes = parse(fileData)
  const numericOutputs = []
  for (const { signals, digits } of notes) {
    const mapping = new Map()
    const sig = { unique: [], nonUnique: [] }
    let fourDigitCode = ''
    for (const signal of signals)
      isUnique(signal)
        ? sig.unique.push(signal)
        : sig.nonUnique.push(signal)
    for (const signal of sig.unique)
      mapping.set(getUniqueNum(signal), sortSignal(signal))
    const getNonUniqueNum = getNonUniqueNumUnloaded(mapping.get('4'), mapping.get('7'))
    for (const signal of sig.nonUnique)
      mapping.set(getNonUniqueNum(signal), sortSignal(signal))
    for (const digit of digits) {
      mapping.forEach((value, key) => {
        if (value === sortSignal(digit))
          fourDigitCode += key
      })
    }
    numericOutputs.push(Number(fourDigitCode))
  }

  return numericOutputs.reduce((a, c) => a + c)
}

export default solvePart2
