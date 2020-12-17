// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('keyShortcuts', () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" />,
    )
    expect(accessibleObject.hasOwnProperty('keyShortcuts')).toBe(false)
  })

  it(`has property set to array when attribute set to string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-keyshortcuts="Control+A" />,
    )
    expect(accessibleObject.hasOwnProperty('keyShortcuts')).toBe(true)
    expect(accessibleObject.keyShortcuts).toHaveLength(1)
    expect(accessibleObject.keyShortcuts).toContain('Control+A')
  })

  it(`has property set to array when attribute set to string with multiple keys`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-keyshortcuts="Control+A Alt+Shift+A" />,
    )
    expect(accessibleObject.hasOwnProperty('keyShortcuts')).toBe(true)
    expect(accessibleObject.keyShortcuts).toHaveLength(2)
    expect(accessibleObject.keyShortcuts).toContain('Control+A')
    expect(accessibleObject.keyShortcuts).toContain('Alt+Shift+A')
  })
})
