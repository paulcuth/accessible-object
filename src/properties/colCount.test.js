import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("colCount", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject"></div>
    );
    expect(accessibleObject.hasOwnProperty("colCount")).toBe(false);
  });

  it(`doesn't have property when attribute is specified on invalid elements`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-colcount="5"></div>
    );
    expect(accessibleObject.hasOwnProperty("colCount")).toBe(false);
  });

  it(`has property when attribute is specified on a table`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <table data-testid="subject" aria-colcount="3"></table>
    );
    expect(accessibleObject.hasOwnProperty("colCount")).toBe(true);
    expect(accessibleObject.colCount).toBe(3);
  });

  it(`has property when attribute is specified on a grid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid" data-testid="subject" aria-colcount="5"></div>
    );
    expect(accessibleObject.hasOwnProperty("colCount")).toBe(true);
    expect(accessibleObject.colCount).toBe(5);
  });

  it(`has property when attribute is specified on a treegrid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <table role="treegrid" data-testid="subject" aria-colcount="5"></table>
    );
    expect(accessibleObject.hasOwnProperty("colCount")).toBe(true);
    expect(accessibleObject.colCount).toBe(5);
  });

  it(`can have a value of -1`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid" data-testid="subject" aria-colcount="-1"></div>
    );
    expect(accessibleObject.hasOwnProperty("colCount")).toBe(true);
    expect(accessibleObject.colCount).toBe(-1);
  });

  it(`can't have a value of -2`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid" data-testid="subject" aria-colcount="-2"></div>
    );
    expect(accessibleObject.hasOwnProperty("colCount")).toBe(false);
  });
});
