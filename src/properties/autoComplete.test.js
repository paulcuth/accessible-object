import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("autoComplete", () => {
  it(`doesn't have autocomplete when none specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("autoComplete")).toBe(false);
  });

  it(`has autocomplete when specified on textbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-autocomplete="inline" />
    );
    expect(accessibleObject.hasOwnProperty("autoComplete")).toBe(true);
    expect(accessibleObject.autoComplete).toBe("inline");
  });

  it(`has autocomplete when specified on select`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <select data-testid="subject" aria-autocomplete="inline" />
    );
    expect(accessibleObject.hasOwnProperty("autoComplete")).toBe(true);
    expect(accessibleObject.autoComplete).toBe("inline");
  });

  it(`has autocomplete when specified on a searchbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input type="search" data-testid="subject" aria-autocomplete="inline" />
    );
    expect(accessibleObject.hasOwnProperty("autoComplete")).toBe(true);
    expect(accessibleObject.autoComplete).toBe("inline");
  });

  it(`doesn't have autocomplete on other elements`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-autocomplete="inline"></div>
    );
    expect(accessibleObject.hasOwnProperty("autoComplete")).toBe(false);
  });

  it(`can have a value of list`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-autocomplete="list" />
    );
    expect(accessibleObject.hasOwnProperty("autoComplete")).toBe(true);
    expect(accessibleObject.autoComplete).toBe("list");
  });

  it(`can have a value of both`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-autocomplete="both" />
    );
    expect(accessibleObject.hasOwnProperty("autoComplete")).toBe(true);
    expect(accessibleObject.autoComplete).toBe("both");
  });

  it(`can't have a arbitrary values`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-autocomplete="moo" />
    );
    expect(accessibleObject.hasOwnProperty("autoComplete")).toBe(false);
  });

  it(`falls back to html autocomplete values`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" autoComplete="on" />
    );
    expect(accessibleObject.hasOwnProperty("autoComplete")).toBe(true);
    expect(accessibleObject.autoComplete).toBe("on");
  });

  it(`doesn't fall back to html autocomplete value when it is "off"`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" autoComplete="off" />
    );
    expect(accessibleObject.hasOwnProperty("autoComplete")).toBe(false);
  });

  it(`falls back any valid html autocomplete value`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" autoComplete="honorific-suffix" />
    );
    expect(accessibleObject.hasOwnProperty("autoComplete")).toBe(true);
    expect(accessibleObject.autoComplete).toBe("honorific-suffix");
  });

  it(`doesn't fall back to invalid html autocomplete values`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" autoComplete="moo" />
    );
    expect(accessibleObject.hasOwnProperty("autoComplete")).toBe(false);
  });
});
