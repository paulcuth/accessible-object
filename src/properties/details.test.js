import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("details", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("details")).toBe(false);
  });

  it(`doesn't have property when used as boolean`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-details></div>
    );
    expect(accessibleObject.hasOwnProperty("details")).toBe(false);
  });

  it(`doesn't have property when id is invalid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-details="no-element"></div>
    );
    expect(accessibleObject.hasOwnProperty("details")).toBe(false);
  });

  it(`has property when value is a valid id`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-details="details"></div>
        <div id="details" data-testid="details"></div>
      </>
    );
    expect(accessibleObject.hasOwnProperty("details")).toBe(true);
    expect(accessibleObject.details).toBe(getByTestId("details"));
  });
});
