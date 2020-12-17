// @flow strict

import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("multiLine", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("multiLine")).toBe(false);
  });

  it(`doesn't have property when role is invalid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-multiline />
    );
    expect(accessibleObject.hasOwnProperty("multiLine")).toBe(false);
  });

  it(`doesn't have property when value is false`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="textbox" data-testid="subject" aria-multiline="false" />
    );
    expect(accessibleObject.hasOwnProperty("multiLine")).toBe(false);
  });

  it(`has property when native role is textbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-multiline />
    );
    expect(accessibleObject.hasOwnProperty("multiLine")).toBe(true);
    expect(accessibleObject.multiLine).toBe(true);
  });

  it(`has property when native role is searchbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input type="search" data-testid="subject" aria-multiline />
    );
    expect(accessibleObject.hasOwnProperty("multiLine")).toBe(true);
    expect(accessibleObject.multiLine).toBe(true);
  });

  it(`has property when role is set to textbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="textbox" data-testid="subject" aria-multiline />
    );
    expect(accessibleObject.hasOwnProperty("multiLine")).toBe(true);
    expect(accessibleObject.multiLine).toBe(true);
  });

  it(`has property when value is true`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-multiline="true" />
    );
    expect(accessibleObject.hasOwnProperty("multiLine")).toBe(true);
    expect(accessibleObject.multiLine).toBe(true);
  });

  it(`has property when value is an unknown value`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-multiline="moo" />
    );
    expect(accessibleObject.hasOwnProperty("multiLine")).toBe(true);
    expect(accessibleObject.multiLine).toBe(true);
  });
});
