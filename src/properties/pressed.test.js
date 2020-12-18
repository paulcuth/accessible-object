import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("pressed", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject"></div>
    );
    expect(accessibleObject.hasOwnProperty("pressed")).toBe(false);
  });

  it(`doesn't have property when applied to invalid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-pressed></div>
    );
    expect(accessibleObject.hasOwnProperty("pressed")).toBe(false);
  });

  it(`is set when applied to a button`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <button type="button" data-testid="subject" aria-pressed />
    );
    expect(accessibleObject.hasOwnProperty("pressed")).toBe(true);
    expect(accessibleObject.pressed).toBe(true);
  });

  it(`can be set to false`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <button type="button" data-testid="subject" aria-pressed="false" />
    );
    expect(accessibleObject.hasOwnProperty("pressed")).toBe(true);
    expect(accessibleObject.pressed).toBe(false);
  });

  it(`can be set to mixed`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <button type="button" data-testid="subject" aria-pressed="mixed" />
    );
    expect(accessibleObject.hasOwnProperty("pressed")).toBe(true);
    expect(accessibleObject.pressed).toBe("mixed");
  });
});
