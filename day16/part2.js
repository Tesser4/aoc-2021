
import parse from './parse.js'

const bin2dec = (binaryStr) => parseInt(binaryStr, 2)
const getValue = (packet) => packet.at(-1)

const parseLiteralValue = (version, binaryStr) => {
  let literalValue = ''
  while (binaryStr[0] === '1') {
    literalValue += binaryStr.substring(1, 5)
    binaryStr = binaryStr.substring(5)
  }
  literalValue += binaryStr.substring(1, 5)
  binaryStr = binaryStr.substring(5)

  return [binaryStr, [version, 4, bin2dec(literalValue)]]
}

const operations = [
  (packets) => packets.reduce((a, c) => a + c),
  (packets) => packets.reduce((a, c) => a * c, 1),
  (packets) => Math.min(...packets),
  (packets) => Math.max(...packets),
  null,
  ([a, b]) => a > b ? 1 : 0,
  ([a, b]) => a < b ? 1 : 0,
  ([a, b]) => a === b ? 1 : 0,
]

const calculateValue = (binary) => {
  const version = bin2dec(binary.substring(0, 3))
  const typeId = bin2dec(binary.substring(3, 6))
  if (typeId === 4)
    return parseLiteralValue(version, binary.substring(6))
  const packets = []
  const lengthTypeId = binary.substring(6, 7)
  let restBitSequence = binary.substring(7)
  if (lengthTypeId === '0') {
    const subPacketsBitLength = bin2dec(restBitSequence.substring(0, 15))
    let subPacketsBitSequence = restBitSequence.substring(15, 15 + subPacketsBitLength)
    restBitSequence = restBitSequence.substring(15 + subPacketsBitLength)
    while (subPacketsBitSequence.length) {
      let parsedPackets
      [subPacketsBitSequence, ...parsedPackets] = calculateValue(subPacketsBitSequence)
      packets.push(...parsedPackets)
    }
  }
  if (lengthTypeId === '1') {
    const numOfSubPackets = bin2dec(restBitSequence.substring(0, 11))
    restBitSequence = restBitSequence.substring(11)
    for (let i = 0; i < numOfSubPackets; i += 1) {
      let parsedPackets
      [restBitSequence, ...parsedPackets] = calculateValue(restBitSequence)
      packets.push(...parsedPackets)
    }
  }
  const operation = operations[typeId]
  const value = operation(packets.map(getValue))

  return [restBitSequence, [version, typeId, value]]
}

const solvePart2 = (fileData) => {
  const binaryInput = parse(fileData)
  const [_, packet] = calculateValue(binaryInput)

  return getValue(packet)
}

export default solvePart2
