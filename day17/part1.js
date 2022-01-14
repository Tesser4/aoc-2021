
import parse from './parse.js'

const getTargetChecker = (target) => {
  const [minX, maxX, minY, maxY] = target
  const isΟnTarget = (coords) => {
    const [x, y] = coords
    const isInTargetX = minX <= x && x <= maxX
    const isInTargetY = minY <= y && y <= maxY
    return isInTargetX && isInTargetY
  }
  const isOffTarget = (coords, velocity) => {
    const [x, y] = coords
    const [vx, vy] = velocity
    const isOffTargetX = (x > maxX && vx > 0) || (x < minX && vx < 0)
    const isOffTargetY = y < minY && vy < 0
    return isOffTargetX || isOffTargetY
  }
  return { isΟnTarget, isOffTarget }
}

const factorizeProbe = (initialVelocity) => {
  let x = 0
  let y = 0
  let maxY = 0
  let [vx, vy] = initialVelocity
  const nextStep = () => {
    x += vx
    y += vy
    if (vx > 0)
      vx -= 1
    else if (vx < 0)
      vx += 1
    vy -= 1
    if (y > maxY)
      maxY = y
  }
  const getCoords = () => [x, y]
  const getVelocity = () => [vx, vy]
  const getMaxY = () => maxY
  return { nextStep, getCoords, getVelocity, getMaxY }
}

const getVelocityRangeX = (target) => {
  const [minX, maxX] = target
  const RANGE_SIZE = 1000
  if (minX >= 0)
    return Array(RANGE_SIZE).fill(0).map((_, i) => i)
  if (maxX <= 0)
    return Array(RANGE_SIZE).fill(0).map((_, i) => i === 0 ? 0 : -i)
  const velocityRangeX = []
  for (let i = minX; i <= maxX; i += 1)
    velocityRangeX.push(i)
  return velocityRangeX
}

const getVelocityRangeY = (target) => {
  const [maxY, minY] = [...target].reverse()
  const velocityRangeY = []
  let minVelocityY
  let maxVelocityY
  if (maxY <= 0) {
    minVelocityY = minY
    maxVelocityY = Math.abs(minY)
  } else if (minY >= 0) {
    minVelocityY = 0
    maxVelocityY = maxY
  } else {
    minVelocityY = -Math.max(maxY, Math.abs(minY))
    maxVelocityY = Math.max(maxY, Math.abs(minY))
  }
  for (let i = minVelocityY; i <= maxVelocityY; i += 1)
    velocityRangeY.push(i)
  return velocityRangeY
}

const solvePart1 = (fileData) => {
  const target = parse(fileData)
  const check = getTargetChecker(target)
  const maxYs = []
  for (const initialVelocityX of getVelocityRangeX(target)) {
    for (const initialVelocityY of getVelocityRangeY(target)) {
      const initialVelocity = [initialVelocityX, initialVelocityY]
      const probe = factorizeProbe(initialVelocity)
      let coords = probe.getCoords()
      let velocity = probe.getVelocity()
      while (!check.isΟnTarget(coords) && !check.isOffTarget(coords, velocity)) {
        probe.nextStep()
        coords = probe.getCoords()
        velocity = probe.getVelocity()
      }
      if (check.isΟnTarget(coords))
        maxYs.push(probe.getMaxY())
    }
  }
  return Math.max(...maxYs)
}

export default solvePart1
