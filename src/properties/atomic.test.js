import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("atomic", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject"></div>
    );
    expect(accessibleObject.hasOwnProperty("atomic")).toBe(false);
  });

  it(`doesn't have property when attribute has no value`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-atomic={""}></div>
    );
    expect(accessibleObject.hasOwnProperty("atomic")).toBe(false);
  });

  it(`doesn't have property when attribute is set to "false"`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-atomic="false"></div>
    );
    expect(accessibleObject.hasOwnProperty("atomic")).toBe(false);
  });

  it(`has property set to true when attribute is set to "true"`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-atomic="true"></div>
    );
    expect(accessibleObject.hasOwnProperty("atomic")).toBe(true);
    expect(accessibleObject.atomic).toBe(true);
  });

  it(`has property set to true when attribute is set to any other string "moo"`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-atomic="true"></div>
    );
    expect(accessibleObject.hasOwnProperty("atomic")).toBe(true);
    expect(accessibleObject.atomic).toBe(true);
  });
});
