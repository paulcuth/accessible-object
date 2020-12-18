import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("multiSelectable", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("multiSelectable")).toBe(false);
  });

  it(`doesn't have property when role is invalid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-multiselectable />
    );
    expect(accessibleObject.hasOwnProperty("multiSelectable")).toBe(false);
  });

  it(`doesn't have property when value is false`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid" data-testid="subject" aria-multiselectable="false" />
    );
    expect(accessibleObject.hasOwnProperty("multiSelectable")).toBe(false);
  });

  it(`has property when role is set to grid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid" data-testid="subject" aria-multiselectable />
    );
    expect(accessibleObject.hasOwnProperty("multiSelectable")).toBe(true);
    expect(accessibleObject.multiSelectable).toBe(true);
  });

  it(`has property when role is set to listbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listbox" data-testid="subject" aria-multiselectable />
    );
    expect(accessibleObject.hasOwnProperty("multiSelectable")).toBe(true);
    expect(accessibleObject.multiSelectable).toBe(true);
  });

  it(`has property when role is set to tablist`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tablist" data-testid="subject" aria-multiselectable />
    );
    expect(accessibleObject.hasOwnProperty("multiSelectable")).toBe(true);
    expect(accessibleObject.multiSelectable).toBe(true);
  });

  it(`has property when role is set to tree`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tree" data-testid="subject" aria-multiselectable />
    );
    expect(accessibleObject.hasOwnProperty("multiSelectable")).toBe(true);
    expect(accessibleObject.multiSelectable).toBe(true);
  });

  it(`has property when role is set to treegrid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="treegrid" data-testid="subject" aria-multiselectable />
    );
    expect(accessibleObject.hasOwnProperty("multiSelectable")).toBe(true);
    expect(accessibleObject.multiSelectable).toBe(true);
  });

  it(`has property when value is true`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listbox" data-testid="subject" aria-multiselectable="true" />
    );
    expect(accessibleObject.hasOwnProperty("multiSelectable")).toBe(true);
    expect(accessibleObject.multiSelectable).toBe(true);
  });

  it(`has property when value is an unknown value`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listbox" data-testid="subject" aria-multiselectable="moo" />
    );
    expect(accessibleObject.hasOwnProperty("multiSelectable")).toBe(true);
    expect(accessibleObject.multiSelectable).toBe(true);
  });
});
