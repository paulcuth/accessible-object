import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("sort", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject"></div>
    );
    expect(accessibleObject.hasOwnProperty("sort")).toBe(false);
  });

  it(`doesn't have property on element with invalid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="row" data-testid="subject" aria-sort="ascending"></div>
    );
    expect(accessibleObject.hasOwnProperty("sort")).toBe(false);
  });

  it(`has property on element with role of rowheader`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="rowheader" data-testid="subject" aria-sort="ascending"></div>
    );
    expect(accessibleObject.hasOwnProperty("sort")).toBe(true);
    expect(accessibleObject.sort).toBe("ascending");
  });

  it(`has property on element with role of colheader`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="colheader" data-testid="subject" aria-sort="descending"></div>
    );
    expect(accessibleObject.hasOwnProperty("sort")).toBe(true);
    expect(accessibleObject.sort).toBe("descending");
  });

  it(`can have value of ascending`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="colheader" data-testid="subject" aria-sort="ascending"></div>
    );
    expect(accessibleObject.hasOwnProperty("sort")).toBe(true);
    expect(accessibleObject.sort).toBe("ascending");
  });

  it(`can have value of decending`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="rowheader" data-testid="subject" aria-sort="descending"></div>
    );
    expect(accessibleObject.hasOwnProperty("sort")).toBe(true);
    expect(accessibleObject.sort).toBe("descending");
  });

  it(`can have value of none`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="rowheader" data-testid="subject" aria-sort="none"></div>
    );
    expect(accessibleObject.hasOwnProperty("sort")).toBe(true);
    expect(accessibleObject.sort).toBe("none");
  });

  it(`can have value of other`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="rowheader" data-testid="subject" aria-sort="other"></div>
    );
    expect(accessibleObject.hasOwnProperty("sort")).toBe(true);
    expect(accessibleObject.sort).toBe("other");
  });

  it(`defaults to none if specified value is invalid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="rowheader" data-testid="subject" aria-sort="moo"></div>
    );
    expect(accessibleObject.hasOwnProperty("sort")).toBe(true);
    expect(accessibleObject.sort).toBe("none");
  });

  it(`defaults to none if not specified on valid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="rowheader" data-testid="subject"></div>
    );
    expect(accessibleObject.hasOwnProperty("sort")).toBe(true);
    expect(accessibleObject.sort).toBe("none");
  });
});
