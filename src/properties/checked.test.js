import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("checked", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject"></div>
    );
    expect(accessibleObject.hasOwnProperty("checked")).toBe(false);
  });

  it(`doesn't have property when applied to invalid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-checked></div>
    );
    expect(accessibleObject.hasOwnProperty("checked")).toBe(false);
  });

  it(`is set when applied to a checkbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input
        type="checkbox"
        data-testid="subject"
        checked
        aria-checked
        onChange={() => {}} // Required by react
      />
    );
    expect(accessibleObject.hasOwnProperty("checked")).toBe(true);
    expect(accessibleObject.checked).toBe(true);
  });

  it(`is set when applied to an option`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <ul role="listbox">
        <li role="option" data-testid="subject" aria-checked="true">
          Moo
        </li>
      </ul>
    );
    expect(accessibleObject.hasOwnProperty("checked")).toBe(true);
    expect(accessibleObject.checked).toBe(true);
  });

  it(`is set when applied to a radio button`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input
        type="radio"
        data-testid="subject"
        checked
        aria-checked
        onChange={() => {}} // Required by react
      />
    );
    expect(accessibleObject.hasOwnProperty("checked")).toBe(true);
    expect(accessibleObject.checked).toBe(true);
  });

  it(`is set when applied to a switch`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <button
        type="button"
        role="switch"
        data-testid="subject"
        aria-checked
      ></button>
    );
    expect(accessibleObject.hasOwnProperty("checked")).toBe(true);
    expect(accessibleObject.checked).toBe(true);
  });

  it(`is set when applied to a menuitemcheckbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <ul role="menu">
        <li role="menuitemcheckbox" data-testid="subject" aria-checked></li>
      </ul>
    );
    expect(accessibleObject.hasOwnProperty("checked")).toBe(true);
    expect(accessibleObject.checked).toBe(true);
  });

  it(`is set when applied to a menuitemradio`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <ul role="menu">
        <li role="menuitemradio" data-testid="subject" aria-checked></li>
      </ul>
    );
    expect(accessibleObject.hasOwnProperty("checked")).toBe(true);
    expect(accessibleObject.checked).toBe(true);
  });

  it(`is set when applied to a treeitem`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <ul role="tree">
        <li role="presentation">
          <a role="treeitem" data-testid="subject" aria-checked>
            item
          </a>
        </li>
        …
      </ul>
    );
    expect(accessibleObject.hasOwnProperty("checked")).toBe(true);
    expect(accessibleObject.checked).toBe(true);
  });

  it(`can be set to false`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input type="checkbox" data-testid="subject" aria-checked="false" />
    );
    expect(accessibleObject.hasOwnProperty("checked")).toBe(true);
    expect(accessibleObject.checked).toBe(false);
  });

  it(`can be set to mixed`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input type="checkbox" data-testid="subject" aria-checked="mixed" />
    );
    expect(accessibleObject.hasOwnProperty("checked")).toBe(true);
    expect(accessibleObject.checked).toBe("mixed");
  });

  it(`uses native semantics if it conflicts with aria value [html checked]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input
        type="checkbox"
        data-testid="subject"
        checked
        aria-checked="false"
        onChange={() => {}} // Required by react
      />
    );
    expect(accessibleObject.hasOwnProperty("checked")).toBe(true);
    expect(accessibleObject.checked).toBe(true);
  });

  it(`uses native semantics if it conflicts with aria value [html unchecked]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input
        type="checkbox"
        data-testid="subject"
        checked={false}
        aria-checked="true"
        onChange={() => {}} // Required by react
      />
    );
    expect(accessibleObject.hasOwnProperty("checked")).toBe(true);
    expect(accessibleObject.checked).toBe(false);
  });

  it(`uses aria if not in conflict with native semantics`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input
        type="checkbox"
        data-testid="subject"
        checked
        aria-checked="mixed"
        onChange={() => {}} // Required by react
      />
    );
    expect(accessibleObject.hasOwnProperty("checked")).toBe(true);
    expect(accessibleObject.checked).toBe("mixed");
  });
});
