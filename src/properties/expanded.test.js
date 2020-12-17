// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('expanded', () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />,
    )
    expect(accessibleObject.hasOwnProperty('expanded')).toBe(false)
  })

  it(`doesn't have property when attribute specified on element with invalid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-expanded />,
    )
    expect(accessibleObject.hasOwnProperty('expanded')).toBe(false)
  })

  it(`has property set to true when boolean attribute specified on element with valid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="main" data-testid="subject" aria-expanded />,
    )
    expect(accessibleObject.hasOwnProperty('expanded')).toBe(true)
    expect(accessibleObject.expanded).toBe(true)
  })

  it(`has property set to true when attribute set to true`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="main" data-testid="subject" aria-expanded="true" />,
    )
    expect(accessibleObject.hasOwnProperty('expanded')).toBe(true)
    expect(accessibleObject.expanded).toBe(true)
  })

  it(`has property set to false when attribute set to empty string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="main" data-testid="subject" aria-expanded="" />,
    )
    expect(accessibleObject.hasOwnProperty('expanded')).toBe(true)
    expect(accessibleObject.expanded).toBe(false)
  })

  it(`has property set to true when attribute set to a unknown value`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="main" data-testid="subject" aria-expanded="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('expanded')).toBe(true)
    expect(accessibleObject.expanded).toBe(true)
  })
})
