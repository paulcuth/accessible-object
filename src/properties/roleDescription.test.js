// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('roleDescription', () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="region" data-testid="subject" />,
    )
    expect(accessibleObject.hasOwnProperty('roleDescription')).toBe(false)
  })

  it(`doesn't have property when attribute set on element with no role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-roledescription="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('roleDescription')).toBe(false)
  })

  it(`doesn't have property when attribute set to empty string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="region" data-testid="subject" aria-roledescription="" />,
    )
    expect(accessibleObject.hasOwnProperty('roleDescription')).toBe(false)
  })

  it(`doesn't have property when attribute set to only whitespace`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="region" data-testid="subject" aria-roledescription="   " />,
    )
    expect(accessibleObject.hasOwnProperty('roleDescription')).toBe(false)
  })

  it(`has property when attribute set on element with a role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="region" data-testid="subject" aria-roledescription="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('roleDescription')).toBe(true)
    expect(accessibleObject.roleDescription).toBe('moo')
  })

  it(`has property when attribute set on element with native role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <select data-testid="subject" aria-roledescription="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('roleDescription')).toBe(true)
    expect(accessibleObject.roleDescription).toBe('moo')
  })
})
