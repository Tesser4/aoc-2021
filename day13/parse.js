
const nl = '\r\n'

const parseCoords = (str) => str
  .trim()
  .split(nl)
  .map(line => line.split(','))
  .map(coords => coords.map(Number))

const parseFolds = (str) => str
  .trim()
  .split(nl)
  .map(line => line.substring('fold along '.length))
  .map(line => line.split('='))
  .map(([direction, position]) => [direction, Number(position)])

const parse = (fileData) => {
  const [coordsStr, foldsStr] = fileData
    .trim()
    .split(nl.repeat(2))

  return {
    coords: parseCoords(coordsStr),
    folds: parseFolds(foldsStr),
  }
}

export default parse
