import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("colIndex", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject"></div>
    );
    expect(accessibleObject.hasOwnProperty("colIndex")).toBe(false);
  });

  it(`doesn't have property when attribute is specified on invalid elements`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-colindex="5"></div>
    );
    expect(accessibleObject.hasOwnProperty("colIndex")).toBe(false);
  });

  it(`has property when attribute is specified on a cell`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="cell" data-testid="subject" aria-colindex="3"></div>
    );
    expect(accessibleObject.hasOwnProperty("colIndex")).toBe(true);
    expect(accessibleObject.colIndex).toBe(3);
  });

  it(`has property when attribute is specified on a row`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="row" data-testid="subject" aria-colindex="5"></div>
    );
    expect(accessibleObject.hasOwnProperty("colIndex")).toBe(true);
    expect(accessibleObject.colIndex).toBe(5);
  });

  it(`has property when attribute is specified on a columnheader`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="columnheader" data-testid="subject" aria-colindex="3"></div>
    );
    expect(accessibleObject.hasOwnProperty("colIndex")).toBe(true);
    expect(accessibleObject.colIndex).toBe(3);
  });

  it(`has property when attribute is specified on a gridcell`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="gridcell" data-testid="subject" aria-colindex="2"></div>
    );
    expect(accessibleObject.hasOwnProperty("colIndex")).toBe(true);
    expect(accessibleObject.colIndex).toBe(2);
  });

  it(`has property when attribute is specified on a rowheader`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="rowheader" data-testid="subject" aria-colindex="1"></div>
    );
    expect(accessibleObject.hasOwnProperty("colIndex")).toBe(true);
    expect(accessibleObject.colIndex).toBe(1);
  });

  it(`can't have a value of 0`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid" data-testid="subject" aria-colindex="0"></div>
    );
    expect(accessibleObject.hasOwnProperty("colIndex")).toBe(false);
  });
});
