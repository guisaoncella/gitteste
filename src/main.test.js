import { describe, it } from 'node:test'
import assert from 'node:assert'
import { testSum } from './main.js'

describe('test sum', async () => {
  it('adds two numbers correctly', () => {
    assert.equal(testSum(1, 2), 3)
  })
  
  it('returns 0 when both inputs are 0', () => {
    assert.equal(testSum(0, 0), 0)
  })
  
  it('adds two numbers incorrectly', () => {
    assert.notEqual(testSum(3, 3), 9)
  })
})