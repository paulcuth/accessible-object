import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("focused", () => {
  it(`doesn't have property on non-focusable element`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("focused")).toBe(false);
  });

  it(`is set to false on focusable element with no focus`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("focused")).toBe(true);
    expect(accessibleObject.focused).toBe(false);
  });

  it(`is set to true on focusable element with focus`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" autoFocus />
    );
    expect(accessibleObject.hasOwnProperty("focused")).toBe(true);
    expect(accessibleObject.focused).toBe(true);
  });
});
