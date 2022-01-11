
import {
  assertEquals,
  dirname,
  fromFileUrl,
  join,
} from '../deps.js'

import solvePart1 from './part1.js'
import solvePart2 from './part2.js'

const dirName = dirname(fromFileUrl(import.meta.url))
const pt1example1FileData = await Deno.readTextFile(join(dirName, 'example-pt1-1.txt'))
const pt1example2FileData = await Deno.readTextFile(join(dirName, 'example-pt1-2.txt'))
const pt1example3FileData = await Deno.readTextFile(join(dirName, 'example-pt1-3.txt'))
const pt1example4FileData = await Deno.readTextFile(join(dirName, 'example-pt1-4.txt'))
const pt2example1FileData = await Deno.readTextFile(join(dirName, 'example-pt2-1.txt'))
const pt2example2FileData = await Deno.readTextFile(join(dirName, 'example-pt2-2.txt'))
const pt2example3FileData = await Deno.readTextFile(join(dirName, 'example-pt2-3.txt'))
const pt2example4FileData = await Deno.readTextFile(join(dirName, 'example-pt2-4.txt'))
const pt2example5FileData = await Deno.readTextFile(join(dirName, 'example-pt2-5.txt'))
const pt2example6FileData = await Deno.readTextFile(join(dirName, 'example-pt2-6.txt'))
const pt2example7FileData = await Deno.readTextFile(join(dirName, 'example-pt2-7.txt'))
const pt2example8FileData = await Deno.readTextFile(join(dirName, 'example-pt2-8.txt'))
const inputFileData = await Deno.readTextFile(join(dirName, 'input.txt'))

Deno.test('Day 16 (Packet Decoder) - Part 1 example 1', () => {
  const result = solvePart1(pt1example1FileData)
  const expected = 16

  assertEquals(result, expected)
})

Deno.test('Day 16 (Packet Decoder) - Part 1 example 2', () => {
  const result = solvePart1(pt1example2FileData)
  const expected = 12

  assertEquals(result, expected)
})

Deno.test('Day 16 (Packet Decoder) - Part 1 example 3', () => {
  const result = solvePart1(pt1example3FileData)
  const expected = 23

  assertEquals(result, expected)
})

Deno.test('Day 16 (Packet Decoder) - Part 1 example 4', () => {
  const result = solvePart1(pt1example4FileData)
  const expected = 31

  assertEquals(result, expected)
})

Deno.test('Day 16 (Packet Decoder) - Part 1 input', () => {
  const result = solvePart1(inputFileData)
  const expected = 951

  assertEquals(result, expected)
})

Deno.test('Day 16 (Packet Decoder) - Part 2 example 1', () => {
  const result = solvePart2(pt2example1FileData)
  const expected = 3

  assertEquals(result, expected)
})

Deno.test('Day 16 (Packet Decoder) - Part 2 example 2', () => {
  const result = solvePart2(pt2example2FileData)
  const expected = 54

  assertEquals(result, expected)
})

Deno.test('Day 16 (Packet Decoder) - Part 2 example 3', () => {
  const result = solvePart2(pt2example3FileData)
  const expected = 7

  assertEquals(result, expected)
})

Deno.test('Day 16 (Packet Decoder) - Part 2 example 4', () => {
  const result = solvePart2(pt2example4FileData)
  const expected = 9

  assertEquals(result, expected)
})

Deno.test('Day 16 (Packet Decoder) - Part 2 example 5', () => {
  const result = solvePart2(pt2example5FileData)
  const expected = 1

  assertEquals(result, expected)
})

Deno.test('Day 16 (Packet Decoder) - Part 2 example 6', () => {
  const result = solvePart2(pt2example6FileData)
  const expected = 0

  assertEquals(result, expected)
})

Deno.test('Day 16 (Packet Decoder) - Part 2 example 7', () => {
  const result = solvePart2(pt2example7FileData)
  const expected = 0

  assertEquals(result, expected)
})

Deno.test('Day 16 (Packet Decoder) - Part 2 example 8', () => {
  const result = solvePart2(pt2example8FileData)
  const expected = 1

  assertEquals(result, expected)
})

Deno.test('Day 16 (Packet Decoder) - Part 2 input', () => {
  const result = solvePart2(inputFileData)
  const expected = 902198718880

  assertEquals(result, expected)
})
