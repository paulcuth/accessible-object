// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('labelledBy', () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />,
    )
    expect(accessibleObject.hasOwnProperty('labelledBy')).toBe(false)
  })

  it(`has property when value is a valid id`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-labelledby="label-1"></div>
        <p id="label-1" data-testid="label-1" />
      </>,
    )
    expect(accessibleObject.hasOwnProperty('labelledBy')).toBe(true)
    expect(accessibleObject.labelledBy).toHaveLength(1)
    expect(accessibleObject.labelledBy).toContain(getByTestId('label-1'))
  })

  it(`can handle multiple element references`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <>
          <div data-testid="subject" aria-labelledby="label-1 label-2"></div>
          <p id="label-1" data-testid="label-1" />
          <p id="label-2" data-testid="label-2" />
        </>
        ,
      </>,
    )
    expect(accessibleObject.hasOwnProperty('labelledBy')).toBe(true)
    expect(accessibleObject.labelledBy).toHaveLength(2)
    expect(accessibleObject.labelledBy).toContain(getByTestId('label-1'))
    expect(accessibleObject.labelledBy).toContain(getByTestId('label-2'))
  })

  it(`ignores invalid element references`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-labelledby="label-1 label-2"></div>
        <p id="label-1" data-testid="label-1" />
      </>,
    )
    expect(accessibleObject.hasOwnProperty('labelledBy')).toBe(true)
    expect(accessibleObject.labelledBy).toHaveLength(1)
    expect(accessibleObject.labelledBy).toContain(getByTestId('label-1'))
  })

  it(`sets property to an empty array if all ids invalid`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-labelledby="label-1 label-2"></div>
      </>,
    )
    expect(accessibleObject.hasOwnProperty('labelledBy')).toBe(true)
    expect(accessibleObject.labelledBy).toHaveLength(0)
  })
})
