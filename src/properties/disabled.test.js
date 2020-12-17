// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('disabled', () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" />,
    )
    expect(accessibleObject.hasOwnProperty('disabled')).toBe(false)
  })

  it(`doesn't have property when attribute is set to empty string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-disabled="" />,
    )
    expect(accessibleObject.hasOwnProperty('disabled')).toBe(false)
  })

  it(`has property when attribute is set with boolean`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-disabled />,
    )
    expect(accessibleObject.hasOwnProperty('disabled')).toBe(true)
    expect(accessibleObject.disabled).toBe(true)
  })

  it(`has property when attribute is set to true`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-disabled="true" />,
    )
    expect(accessibleObject.hasOwnProperty('disabled')).toBe(true)
    expect(accessibleObject.disabled).toBe(true)
  })

  it(`gives precedent to native semantics when specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" disabled aria-disabled="" />,
    )
    expect(accessibleObject.hasOwnProperty('disabled')).toBe(true)
  })
})
