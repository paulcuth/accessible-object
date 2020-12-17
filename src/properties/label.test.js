// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('label', () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />,
    )
    expect(accessibleObject.hasOwnProperty('label')).toBe(false)
  })

  it(`doesn't have property when attribute set to empty string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-label="" />,
    )
    expect(accessibleObject.hasOwnProperty('label')).toBe(false)
  })

  it(`has property when attribute set to string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-label="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('label')).toBe(true)
    expect(accessibleObject.label).toBe('moo')
  })
})
