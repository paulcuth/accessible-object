import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("flowTo", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("flowTo")).toBe(false);
  });

  it(`has property when value is a valid id`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-flowto="col-2"></div>
        <p id="col-2" data-testid="col-2" />
      </>
    );
    expect(accessibleObject.hasOwnProperty("flowTo")).toBe(true);
    expect(accessibleObject.flowTo).toHaveLength(1);
    expect(accessibleObject.flowTo).toContain(getByTestId("col-2"));
  });

  it(`can handle multiple element references`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <>
          <div data-testid="subject" aria-flowto="col-2 col-3"></div>
          <p id="col-2" data-testid="col-2" />
          <p id="col-3" data-testid="col-3" />
        </>
        ,
      </>
    );
    expect(accessibleObject.hasOwnProperty("flowTo")).toBe(true);
    expect(accessibleObject.flowTo).toHaveLength(2);
    expect(accessibleObject.flowTo).toContain(getByTestId("col-2"));
    expect(accessibleObject.flowTo).toContain(getByTestId("col-3"));
  });

  it(`ignores invalid element references`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-flowto="col-2 col-3"></div>
        <p id="col-2" data-testid="col-2" />
      </>
    );
    expect(accessibleObject.hasOwnProperty("flowTo")).toBe(true);
    expect(accessibleObject.flowTo).toHaveLength(1);
    expect(accessibleObject.flowTo).toContain(getByTestId("col-2"));
  });

  it(`sets property to an empty array if all ids invalid`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-flowto="col-2 col-3"></div>
      </>
    );
    expect(accessibleObject.hasOwnProperty("flowTo")).toBe(true);
    expect(accessibleObject.flowTo).toHaveLength(0);
  });
});
