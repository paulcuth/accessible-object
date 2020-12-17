// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('owns', () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />,
    )
    expect(accessibleObject.hasOwnProperty('owns')).toBe(false)
  })

  it(`has property when value is a valid id`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-owns="child-1"></div>
        <p id="child-1" data-testid="child-1" />
      </>,
    )
    expect(accessibleObject.hasOwnProperty('owns')).toBe(true)
    expect(accessibleObject.owns).toHaveLength(1)
    expect(accessibleObject.owns).toContain(getByTestId('child-1'))
  })

  it(`can handle multiple element references`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <>
          <div data-testid="subject" aria-owns="child-1 child-2"></div>
          <p id="child-1" data-testid="child-1" />
          <p id="child-2" data-testid="child-2" />
        </>
        ,
      </>,
    )
    expect(accessibleObject.hasOwnProperty('owns')).toBe(true)
    expect(accessibleObject.owns).toHaveLength(2)
    expect(accessibleObject.owns).toContain(getByTestId('child-1'))
    expect(accessibleObject.owns).toContain(getByTestId('child-2'))
  })

  it(`ignores invalid element references`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-owns="child-1 child-2"></div>
        <p id="child-1" data-testid="child-1" />
      </>,
    )
    expect(accessibleObject.hasOwnProperty('owns')).toBe(true)
    expect(accessibleObject.owns).toHaveLength(1)
    expect(accessibleObject.owns).toContain(getByTestId('child-1'))
  })

  it(`sets property to an empty array if all ids invalid`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-owns="child-1 child-2"></div>
      </>,
    )
    expect(accessibleObject.hasOwnProperty('owns')).toBe(true)
    expect(accessibleObject.owns).toHaveLength(0)
  })
})
