// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('modal', () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />,
    )
    expect(accessibleObject.hasOwnProperty('modal')).toBe(false)
  })

  it(`doesn't have property when role is invalid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-modal />,
    )
    expect(accessibleObject.hasOwnProperty('modal')).toBe(false)
  })

  it(`doesn't have property when value is false`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="dialog" data-testid="subject" aria-modal="false" />,
    )
    expect(accessibleObject.hasOwnProperty('modal')).toBe(false)
  })

  it(`has property when role is window`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="window" data-testid="subject" aria-modal />,
    )
    expect(accessibleObject.hasOwnProperty('modal')).toBe(true)
    expect(accessibleObject.modal).toBe(true)
  })

  it(`has property when role is dialog`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="dialog" data-testid="subject" aria-modal />,
    )
    expect(accessibleObject.hasOwnProperty('modal')).toBe(true)
    expect(accessibleObject.modal).toBe(true)
  })

  it(`has property when role is alertdialog`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="alertdialog" data-testid="subject" aria-modal />,
    )
    expect(accessibleObject.hasOwnProperty('modal')).toBe(true)
    expect(accessibleObject.modal).toBe(true)
  })

  it(`has property when value is true`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="alertdialog" data-testid="subject" aria-modal="true" />,
    )
    expect(accessibleObject.hasOwnProperty('modal')).toBe(true)
    expect(accessibleObject.modal).toBe(true)
  })

  it(`has property when value is an unknown value`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="alertdialog" data-testid="subject" aria-modal="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('modal')).toBe(true)
    expect(accessibleObject.modal).toBe(true)
  })
})
