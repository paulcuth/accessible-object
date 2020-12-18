import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("selected", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject"></div>
    );
    expect(accessibleObject.hasOwnProperty("selected")).toBe(false);
  });

  it(`doesn't have property when applied to invalid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-selected></div>
    );
    expect(accessibleObject.hasOwnProperty("selected")).toBe(false);
  });

  it(`is set when applied to an element with role of gridcell`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="gridcell" data-testid="subject" aria-selected />
    );
    expect(accessibleObject.hasOwnProperty("selected")).toBe(true);
    expect(accessibleObject.selected).toBe(true);
  });

  it(`is set when applied to an element with role of option`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="option" data-testid="subject" aria-selected />
    );
    expect(accessibleObject.hasOwnProperty("selected")).toBe(true);
    expect(accessibleObject.selected).toBe(true);
  });

  it(`is set when applied to an element with role of row`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="row" data-testid="subject" aria-selected />
    );
    expect(accessibleObject.hasOwnProperty("selected")).toBe(true);
    expect(accessibleObject.selected).toBe(true);
  });

  it(`is set when applied to an element with role of tab`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tab" data-testid="subject" aria-selected />
    );
    expect(accessibleObject.hasOwnProperty("selected")).toBe(true);
    expect(accessibleObject.selected).toBe(true);
  });

  it(`is set when applied to an element with role of columnheader`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="columnheader" data-testid="subject" aria-selected />
    );
    expect(accessibleObject.hasOwnProperty("selected")).toBe(true);
    expect(accessibleObject.selected).toBe(true);
  });

  it(`is set when applied to an element with role of rowheader`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="rowheader" data-testid="subject" aria-selected />
    );
    expect(accessibleObject.hasOwnProperty("selected")).toBe(true);
    expect(accessibleObject.selected).toBe(true);
  });

  it(`is set when applied to an element with role of treeitem`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="treeitem" data-testid="subject" aria-selected />
    );
    expect(accessibleObject.hasOwnProperty("selected")).toBe(true);
    expect(accessibleObject.selected).toBe(true);
  });

  it(`can be set to false`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="row" data-testid="subject" aria-selected="false" />
    );
    expect(accessibleObject.hasOwnProperty("selected")).toBe(true);
    expect(accessibleObject.selected).toBe(false);
  });

  it(`doesn't have property when attribute when set to empty string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="row" data-testid="subject" aria-selected=""></div>
    );
    expect(accessibleObject.hasOwnProperty("selected")).toBe(false);
  });
});
