
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

Deno.test('Day 10 (Syntax Scoring) - Part 1 example', () => {
  const result = solvePart1(exampleFileData)
  const expected = 26397

  assertEquals(result, expected)
})

Deno.test('Day 10 (Syntax Scoring) - Part 1 input', () => {
  const result = solvePart1(inputFileData)
  const expected = 367059

  assertEquals(result, expected)
})

Deno.test('Day 10 (Syntax Scoring) - Part 2 example', () => {
  const result = solvePart2(exampleFileData)
  const expected = 288957

  assertEquals(result, expected)
})

Deno.test('Day 10 (Syntax Scoring) - Part 2 input', () => {
  const result = solvePart2(inputFileData)
  const expected = 1952146692

  assertEquals(result, expected)
})
