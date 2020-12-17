// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('readOnly', () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(false)
  })

  it(`doesn't have property when attribute is set to empty string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-readonly="" />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(false)
  })

  it(`has property when attribute is set with boolean`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`has property when attribute is set to true`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-readonly="true" />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`gives precedent to native semantics when specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" readOnly aria-readonly="" />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`doesn't have property on element with invalid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <p data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(false)
  })

  it(`has property on element with checkbox role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="checkbox" data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`has property on element with combobox role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="combobox" data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`has property on element with grid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid" data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`has property on element with gridcell role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="gridcell" data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`has property on element with listbox role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listbox" data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`has property on element with radiogroup role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="radiogroup" data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`has property on element with slider role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="slider" data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`has property on element with spinbutton role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="spinbutton" data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`has property on element with columnheader role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="columnheader" data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`has property on element with menuitemcheckbox role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menuitemcheckbox" data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`has property on element with rowheader role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="rowheader" data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`has property on element with searchbox role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="searchbox" data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`has property on element with switch role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="switch" data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })

  it(`has property on element with treegrid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="treegrid" data-testid="subject" aria-readonly />,
    )
    expect(accessibleObject.hasOwnProperty('readOnly')).toBe(true)
    expect(accessibleObject.readOnly).toBe(true)
  })
})
