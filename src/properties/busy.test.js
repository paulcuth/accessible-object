import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("busy", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject"></div>
    );
    expect(accessibleObject.hasOwnProperty("busy")).toBe(false);
  });

  it(`doesn't have property when attribute has no value`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-busy={""}></div>
    );
    expect(accessibleObject.hasOwnProperty("busy")).toBe(false);
  });

  it(`doesn't have property when attribute is set to "false"`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-busy="false"></div>
    );
    expect(accessibleObject.hasOwnProperty("busy")).toBe(false);
  });

  it(`has property set to true when attribute is set to "true"`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-busy="true"></div>
    );
    expect(accessibleObject.hasOwnProperty("busy")).toBe(true);
    expect(accessibleObject.busy).toBe(true);
  });

  it(`has property set to true when attribute is set to any other string "moo"`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-busy="true"></div>
    );
    expect(accessibleObject.hasOwnProperty("busy")).toBe(true);
    expect(accessibleObject.busy).toBe(true);
  });
});
