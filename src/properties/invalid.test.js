// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('invalid', () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" />,
    )
    expect(accessibleObject.hasOwnProperty('invalid')).toBe(false)
  })

  it(`doesn't have property property when attribute is set to empty string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-invalid="" />,
    )
    expect(accessibleObject.hasOwnProperty('invalid')).toBe(false)
  })

  it(`has property when attribute is set with boolean`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-invalid />,
    )
    expect(accessibleObject.hasOwnProperty('invalid')).toBe(true)
    expect(accessibleObject.invalid).toBe(true)
  })

  it(`has property when attribute is set to true`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-invalid="true" />,
    )
    expect(accessibleObject.hasOwnProperty('invalid')).toBe(true)
    expect(accessibleObject.invalid).toBe(true)
  })

  it(`has property when attribute is set to spelling`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-invalid="spelling" />,
    )
    expect(accessibleObject.hasOwnProperty('invalid')).toBe(true)
    expect(accessibleObject.invalid).toBe('spelling')
  })

  it(`has property when attribute is set to grammar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-invalid="grammar" />,
    )
    expect(accessibleObject.hasOwnProperty('invalid')).toBe(true)
    expect(accessibleObject.invalid).toBe('grammar')
  })

  it(`has property set to true when attribute is set to unknown value`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-invalid="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('invalid')).toBe(true)
    expect(accessibleObject.invalid).toBe(true)
  })

  it(`has property set to true when native semantics deem invalid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" required />,
    )
    expect(accessibleObject.hasOwnProperty('invalid')).toBe(true)
    expect(accessibleObject.invalid).toBe(true)
  })

  it(`gives precedent to native semantics`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" required aria-invalid="" />,
    )
    expect(accessibleObject.hasOwnProperty('invalid')).toBe(true)
    expect(accessibleObject.invalid).toBe(true)
  })
})
