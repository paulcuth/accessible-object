import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("live", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("live")).toBe(false);
  });

  it(`doesn't have property when attribute set to empty string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-live="" />
    );
    expect(accessibleObject.hasOwnProperty("live")).toBe(false);
  });

  it(`doesn't have property when attribute set to off`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-live="off" />
    );
    expect(accessibleObject.hasOwnProperty("live")).toBe(false);
  });

  it(`has property when attribute set to polite`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-live="polite" />
    );
    expect(accessibleObject.hasOwnProperty("live")).toBe(true);
    expect(accessibleObject.live).toBe("polite");
  });

  it(`has property when attribute set to assertive`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-live="assertive" />
    );
    expect(accessibleObject.hasOwnProperty("live")).toBe(true);
    expect(accessibleObject.live).toBe("assertive");
  });

  it(`defaults to polite when attribute set with boolean`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-live />
    );
    expect(accessibleObject.hasOwnProperty("live")).toBe(true);
    expect(accessibleObject.live).toBe("polite");
  });

  it(`defaults to polite when attribute value is unknown`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-live="moo" />
    );
    expect(accessibleObject.hasOwnProperty("live")).toBe(true);
    expect(accessibleObject.live).toBe("polite");
  });
});
