// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('level', () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />,
    )
    expect(accessibleObject.hasOwnProperty('level')).toBe(false)
  })

  it(`doesn't have property when attribute applied to invalid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-level="2" />,
    )
    expect(accessibleObject.hasOwnProperty('level')).toBe(false)
  })

  it(`doesn't have property when attribute is set to empty string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listitem" data-testid="subject" aria-level="" />,
    )
    expect(accessibleObject.hasOwnProperty('level')).toBe(false)
  })

  it(`doesn't have property when attribute is set to non-integer`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listitem" data-testid="subject" aria-level="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('level')).toBe(false)
  })

  it(`has property when attribute is set to integer on grid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid" data-testid="subject" aria-level="2" />,
    )
    expect(accessibleObject.hasOwnProperty('level')).toBe(true)
    expect(accessibleObject.level).toBe(2)
  })

  it(`has property when attribute is set to integer on heading`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="heading" data-testid="subject" aria-level="2" />,
    )
    expect(accessibleObject.hasOwnProperty('level')).toBe(true)
    expect(accessibleObject.level).toBe(2)
  })

  it(`has property when attribute is set to integer on listitem`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listitem" data-testid="subject" aria-level="2" />,
    )
    expect(accessibleObject.hasOwnProperty('level')).toBe(true)
    expect(accessibleObject.level).toBe(2)
  })

  it(`has property when attribute is set to integer on row`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="row" data-testid="subject" aria-level="2" />,
    )
    expect(accessibleObject.hasOwnProperty('level')).toBe(true)
    expect(accessibleObject.level).toBe(2)
  })

  it(`has property when attribute is set to integer on tablist`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tablist" data-testid="subject" aria-level="2" />,
    )
    expect(accessibleObject.hasOwnProperty('level')).toBe(true)
    expect(accessibleObject.level).toBe(2)
  })

  it(`has property when attribute is set to integer on treegrid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="treegrid" data-testid="subject" aria-level="2" />,
    )
    expect(accessibleObject.hasOwnProperty('level')).toBe(true)
    expect(accessibleObject.level).toBe(2)
  })

  it(`has property when attribute is set to integer on treeitem`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="treeitem" data-testid="subject" aria-level="2" />,
    )
    expect(accessibleObject.hasOwnProperty('level')).toBe(true)
    expect(accessibleObject.level).toBe(2)
  })

  it(`doesn't have property when attribute is set to zero`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listitem" data-testid="subject" aria-level="0" />,
    )
    expect(accessibleObject.hasOwnProperty('level')).toBe(false)
  })

  it(`doesn't have property when attribute is set to negative integer`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listitem" data-testid="subject" aria-level="-1" />,
    )
    expect(accessibleObject.hasOwnProperty('level')).toBe(false)
  })
})
