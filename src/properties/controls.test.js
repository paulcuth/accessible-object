import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("controls", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject"></div>
    );
    expect(accessibleObject.hasOwnProperty("controls")).toBe(false);
  });

  it(`has property when value is a valid id`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-controls="results"></div>
        <div id="criteria" data-testid="criteria"></div>
        <div id="results" data-testid="results"></div>
      </>
    );
    expect(accessibleObject.hasOwnProperty("controls")).toBe(true);
    expect(accessibleObject.controls).toHaveLength(1);
    expect(accessibleObject.controls).toContain(getByTestId("results"));
  });

  it(`can handle multiple element references`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-controls="results criteria"></div>
        <div id="criteria" data-testid="criteria"></div>
        <div id="results" data-testid="results"></div>
      </>
    );
    expect(accessibleObject.hasOwnProperty("controls")).toBe(true);
    expect(accessibleObject.controls).toHaveLength(2);
    expect(accessibleObject.controls).toContain(getByTestId("results"));
    expect(accessibleObject.controls).toContain(getByTestId("criteria"));
  });

  it(`ignores invalid element references`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-controls="results another"></div>
        <div id="criteria" data-testid="criteria"></div>
        <div id="results" data-testid="results"></div>
      </>
    );
    expect(accessibleObject.hasOwnProperty("controls")).toBe(true);
    expect(accessibleObject.controls).toHaveLength(1);
    expect(accessibleObject.controls).toContain(getByTestId("results"));
  });

  it(`sets property to an empty array if all ids invalid`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-controls="another"></div>
      </>
    );
    expect(accessibleObject.hasOwnProperty("controls")).toBe(true);
    expect(accessibleObject.controls).toHaveLength(0);
  });
});
