
import parse from './parse.js'

const empty = '.'
const dot = '#'

const getDimensions = (coords) => coords
  .reduce((acc, [x, y]) => {
    if (x > acc[0])
      acc[0] = x
    if (y > acc[1])
      acc[1] = y
    return acc
  }, [0, 0])
  .map(x => x + 1)

const setupPaper = (coords) => {
  const [width, height] = getDimensions(coords)
  const paper = Array(height)
  for (let i = 0; i < height; i += 1)
    paper[i] = Array(width).fill(empty)
  for (const [x, y] of coords)
    paper[y][x] = dot

  return paper
}

const foldUp = (paper, along) => {
  const paperHeight = paper.length - 1
  const upperHeight = along
  const lowerHeight = paperHeight - along
  const heightDiff = upperHeight - lowerHeight
  const foldedHeight = Math.max(upperHeight, lowerHeight)
  const width = paper[0].length
  const foldedPaper = Array(foldedHeight)
  for (let i = 0; i < foldedHeight; i += 1)
    foldedPaper[i] = Array(width).fill(empty)
  for (let i = 0; i < foldedHeight; i += 1) {
    for (let j = 0; j < width; j += 1) {
      const position = { upper: '', lower: '' }
      if (i + heightDiff >= 0)
        position.upper = paper[i + heightDiff][j]
      if (i - heightDiff >= 0)
        position.lower = paper[paperHeight - i + heightDiff][j]
      if (position.upper === dot || position.lower === dot)
        foldedPaper[i][j] = dot
    }
  }

  return foldedPaper
}

const rotateRight = (paper) => {
  const rotatedPaper = Array(paper[0].length)
  for (let i = 0; i < paper[0].length; i += 1)
    rotatedPaper[i] = Array(paper.length)
  for (let i = 0; i < paper[0].length; i += 1)
    for (let j = 0; j < paper.length; j += 1)
      rotatedPaper[i][j] = paper[paper.length - j - 1][i]

  return rotatedPaper
}

const foldLeft = (paper, along) => {
  const rotatedPaper = rotateRight(paper)
  const foldedPaper = foldUp(rotatedPaper, along)

  return rotateRight(rotateRight(rotateRight(foldedPaper)))
}

const solvePart2 = (fileData) => {
  const { coords, folds } = parse(fileData)
  let paper = setupPaper(coords)
  for (const [foldDirection, foldPosition] of folds) {
    if (foldDirection === 'y')
      paper = foldUp(paper, foldPosition)
    else if (foldDirection === 'x')
      paper = foldLeft(paper, foldPosition)
  }

  return paper
}

export default solvePart2
