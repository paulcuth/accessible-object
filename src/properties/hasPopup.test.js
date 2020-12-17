// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('hasPopup', () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />,
    )
    expect(accessibleObject.hasOwnProperty('hasPopup')).toBe(false)
  })

  it(`doesn't have property when attribute is set to an empty string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-haspopup="" />,
    )
    expect(accessibleObject.hasOwnProperty('hasPopup')).toBe(false)
  })

  it(`doesn't have property when attribute is set to an invalid value`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-haspopup="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('hasPopup')).toBe(false)
  })

  it(`doesn't have property when attribute is set false`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-haspopup="false" />,
    )
    expect(accessibleObject.hasOwnProperty('hasPopup')).toBe(false)
  })

  it(`has property set to menu when attribute is set to true`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-haspopup="true" />,
    )
    expect(accessibleObject.hasOwnProperty('hasPopup')).toBe(true)
    expect(accessibleObject.hasPopup).toBe('menu')
  })

  it(`has property set to menu when attribute is set to menu`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-haspopup="menu" />,
    )
    expect(accessibleObject.hasOwnProperty('hasPopup')).toBe(true)
    expect(accessibleObject.hasPopup).toBe('menu')
  })

  it(`has property set to menu when attribute is set to listbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-haspopup="listbox" />,
    )
    expect(accessibleObject.hasOwnProperty('hasPopup')).toBe(true)
    expect(accessibleObject.hasPopup).toBe('listbox')
  })

  it(`has property set to menu when attribute is set to tree`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-haspopup="tree" />,
    )
    expect(accessibleObject.hasOwnProperty('hasPopup')).toBe(true)
    expect(accessibleObject.hasPopup).toBe('tree')
  })

  it(`has property set to menu when attribute is set to grid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-haspopup="grid" />,
    )
    expect(accessibleObject.hasOwnProperty('hasPopup')).toBe(true)
    expect(accessibleObject.hasPopup).toBe('grid')
  })

  it(`has property set to menu when attribute is set to dialog`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-haspopup="dialog" />,
    )
    expect(accessibleObject.hasOwnProperty('hasPopup')).toBe(true)
    expect(accessibleObject.hasPopup).toBe('dialog')
  })
})
