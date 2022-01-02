
import {
  assertEquals,
  dirname,
  fromFileUrl,
  join,
} from '../deps.js'

import solvePart1 from './part1.js'
import solvePart2 from './part2.js'

const dirName = dirname(fromFileUrl(import.meta.url))
const exampleFileData = await Deno.readTextFile(join(dirName, 'example.txt'))
const inputFileData = await Deno.readTextFile(join(dirName, 'input.txt'))

Deno.test('Day 14 (Extended Polymerization) - Part 1 example', () => {
  const result = solvePart1(exampleFileData)
  const expected = 1588

  assertEquals(result, expected)
})

Deno.test('Day 14 (Extended Polymerization) - Part 1 input', () => {
  const result = solvePart1(inputFileData)
  const expected = 3587

  assertEquals(result, expected)
})

Deno.test('Day 14 (Extended Polymerization) - Part 2 example', () => {
  const result = solvePart2(exampleFileData)
  const expected = 2188189693529

  assertEquals(result, expected)
})

Deno.test('Day 14 (Extended Polymerization) - Part 2 input', () => {
  const result = solvePart2(inputFileData)
  const expected = 3906445077999

  assertEquals(result, expected)
})
