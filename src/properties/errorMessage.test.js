// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('errorMessage', () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" />,
    )
    expect(accessibleObject.hasOwnProperty('errorMessage')).toBe(false)
  })

  it(`doesn't have property when element is valid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <>
        <input data-testid="subject" aria-errormessage="error" />
        <p id="error" />
      </>,
    )
    expect(accessibleObject.hasOwnProperty('errorMessage')).toBe(false)
  })

  it(`doesn't have property when attribute is set to invalid id`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <>
        <input data-testid="subject" aria-invalid aria-errormessage="error" />
      </>,
    )
    expect(accessibleObject.hasOwnProperty('errorMessage')).toBe(false)
  })

  it(`has property when attribute is set to valid id and element is invalid`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <input data-testid="subject" aria-invalid aria-errormessage="error" />
        <p id="error" data-testid="error" />
      </>,
    )
    expect(accessibleObject.hasOwnProperty('errorMessage')).toBe(true)
    expect(accessibleObject.errorMessage).toBe(getByTestId('error'))
  })

  it(`has property when attribute is set to valid id and element is natively invalid`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <input data-testid="subject" required aria-errormessage="error" />
        <p id="error" data-testid="error" />
      </>,
    )
    expect(accessibleObject.hasOwnProperty('errorMessage')).toBe(true)
    expect(accessibleObject.errorMessage).toBe(getByTestId('error'))
  })
})
