import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("current", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("current")).toBe(false);
  });

  it(`doesn't have property set when attribute set to empty string `, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-current="" />
    );
    expect(accessibleObject.hasOwnProperty("current")).toBe(false);
  });

  it(`has property set to true when attribute value is true`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-current="true" />
    );
    expect(accessibleObject.hasOwnProperty("current")).toBe(true);
    expect(accessibleObject.current).toBe(true);
  });

  it(`has property when attribute set to page`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-current="page" />
    );
    expect(accessibleObject.hasOwnProperty("current")).toBe(true);
    expect(accessibleObject.current).toBe("page");
  });

  it(`has property when attribute set to step`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-current="step" />
    );
    expect(accessibleObject.hasOwnProperty("current")).toBe(true);
    expect(accessibleObject.current).toBe("step");
  });

  it(`has property when attribute set to location`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-current="location" />
    );
    expect(accessibleObject.hasOwnProperty("current")).toBe(true);
    expect(accessibleObject.current).toBe("location");
  });

  it(`has property when attribute set to date`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-current="date" />
    );
    expect(accessibleObject.hasOwnProperty("current")).toBe(true);
    expect(accessibleObject.current).toBe("date");
  });

  it(`has property when attribute set to time`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-current="time" />
    );
    expect(accessibleObject.hasOwnProperty("current")).toBe(true);
    expect(accessibleObject.current).toBe("time");
  });

  it(`has property set to true when attribute used as boolean`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-current />
    );
    expect(accessibleObject.hasOwnProperty("current")).toBe(true);
    expect(accessibleObject.current).toBe(true);
  });

  it(`has property set to true when attribute is invalid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-current="moo" />
    );
    expect(accessibleObject.hasOwnProperty("current")).toBe(true);
    expect(accessibleObject.current).toBe(true);
  });
});
