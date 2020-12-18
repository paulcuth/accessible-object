import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("hidden", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("hidden")).toBe(false);
  });

  it(`doesn't have property when attribute is set to false`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-hidden="false" />
    );
    expect(accessibleObject.hasOwnProperty("hidden")).toBe(false);
  });

  it(`has property when attribute is set with boolean`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-hidden />
    );
    expect(accessibleObject.hasOwnProperty("hidden")).toBe(true);
    expect(accessibleObject.hidden).toBe(true);
  });

  it(`has property when attribute is set to true`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-hidden="true" />
    );
    expect(accessibleObject.hasOwnProperty("hidden")).toBe(true);
    expect(accessibleObject.hidden).toBe(true);
  });

  it(`has property when attribute set to unknown value`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-hidden="moo" />
    );
    expect(accessibleObject.hasOwnProperty("hidden")).toBe(true);
    expect(accessibleObject.hidden).toBe(true);
  });

  it(`has property when html hidden is set`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" hidden />
    );
    expect(accessibleObject.hasOwnProperty("hidden")).toBe(true);
    expect(accessibleObject.hidden).toBe(true);
  });

  it(`has property when css display is set to none`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" style={{ display: "none" }} />
    );
    expect(accessibleObject.hasOwnProperty("hidden")).toBe(true);
    expect(accessibleObject.hidden).toBe(true);
  });

  it(`has property when css visibility is set to hidden`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" style={{ visibility: "hidden" }} />
    );
    expect(accessibleObject.hasOwnProperty("hidden")).toBe(true);
    expect(accessibleObject.hidden).toBe(true);
  });
});
