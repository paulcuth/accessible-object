import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("required", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(false);
  });

  it(`doesn't have property when attribute is set to empty string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-required="" />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(false);
  });

  it(`has property when attribute is set with boolean`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-required />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(true);
    expect(accessibleObject.required).toBe(true);
  });

  it(`has property when attribute is set to true`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-required="true" />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(true);
    expect(accessibleObject.required).toBe(true);
  });

  it(`gives precedent to native semantics when specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" required aria-required="" />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(true);
    expect(accessibleObject.required).toBe(true);
  });

  it(`doesn't have property on element with invalid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <p data-testid="subject" aria-required />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(false);
  });

  it(`has property on element with combobox role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="combobox" data-testid="subject" aria-required />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(true);
    expect(accessibleObject.required).toBe(true);
  });

  it(`has property on element with gridcell role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="gridcell" data-testid="subject" aria-required />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(true);
    expect(accessibleObject.required).toBe(true);
  });

  it(`has property on element with listbox role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listbox" data-testid="subject" aria-required />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(true);
    expect(accessibleObject.required).toBe(true);
  });

  it(`has property on element with radiogroup role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="radiogroup" data-testid="subject" aria-required />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(true);
    expect(accessibleObject.required).toBe(true);
  });

  it(`has property on element with spinbutton role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="spinbutton" data-testid="subject" aria-required />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(true);
    expect(accessibleObject.required).toBe(true);
  });

  it(`has property on element with tree role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tree" data-testid="subject" aria-required />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(true);
    expect(accessibleObject.required).toBe(true);
  });

  it(`has property on element with columnheader role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="columnheader" data-testid="subject" aria-required />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(true);
    expect(accessibleObject.required).toBe(true);
  });

  it(`has property on element with rowheader role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="rowheader" data-testid="subject" aria-required />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(true);
    expect(accessibleObject.required).toBe(true);
  });

  it(`has property on element with searchbox role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="searchbox" data-testid="subject" aria-required />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(true);
    expect(accessibleObject.required).toBe(true);
  });

  it(`has property on element with treegrid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="treegrid" data-testid="subject" aria-required />
    );
    expect(accessibleObject.hasOwnProperty("required")).toBe(true);
    expect(accessibleObject.required).toBe(true);
  });
});
