import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("orientation", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(false);
  });

  it(`doesn't have property when attribute set to empty string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-orientation="" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(false);
  });

  it(`doesn't have property when element has invalid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-orientation="vertical" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(false);
  });

  it(`has property when element has role of scrollbar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="scrollbar" data-testid="subject" aria-orientation="vertical" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`has property when element has role of select`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="select" data-testid="subject" aria-orientation="vertical" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`has property when element has role of separator`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="separator" data-testid="subject" aria-orientation="vertical" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`has property when element has role of slider`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="slider" data-testid="subject" aria-orientation="vertical" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`has property when element has role of tablist`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tablist" data-testid="subject" aria-orientation="vertical" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`has property when element has role of toolbar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="toolbar" data-testid="subject" aria-orientation="vertical" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`has property when element has role of combobox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="combobox" data-testid="subject" aria-orientation="vertical" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`has property when element has role of listbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listbox" data-testid="subject" aria-orientation="vertical" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`has property when element has role of menu`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu" data-testid="subject" aria-orientation="vertical" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`has property when element has role of menubar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar" data-testid="subject" aria-orientation="vertical" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`has property when element has role of radiogroup`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div
        role="radiogroup"
        data-testid="subject"
        aria-orientation="vertical"
      />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`has property when element has role of tree`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tree" data-testid="subject" aria-orientation="vertical" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`has property when element has role of select`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div
        role="treegrid"
        data-testid="subject"
        aria-orientation="horizontal"
      />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("horizontal");
  });

  it(`has property when element has role of select`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="treegrid" data-testid="subject" aria-orientation="vertical" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`defaults to vertical for elements with role listbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listbox" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`defaults to vertical for elements with role menu`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`defaults to vertical for elements with role scrollbar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="scrollbar" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`defaults to vertical for elements with role tree`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tree" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("vertical");
  });

  it(`defaults to horizontal for elements with role menubar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("horizontal");
  });

  it(`defaults to horizontal for elements with role separator`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="separator" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("horizontal");
  });

  it(`defaults to horizontal for elements with role slider`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="slider" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("horizontal");
  });

  it(`defaults to horizontal for elements with role tablist`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tablist" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("horizontal");
  });

  it(`defaults to horizontal for elements with role toolbar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="toolbar" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("horizontal");
  });

  it(`defaults to horizontal for elements with native role of seperator`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <hr data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("horizontal");
  });

  it(`defaults to horizontal for elements with native role of slider`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input type="range" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(true);
    expect(accessibleObject.orientation).toBe("horizontal");
  });

  it(`defaults to unset for elements with role of combobox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="combobox" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(false);
  });

  it(`defaults to unset for elements with role of radiogroup`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="radiogroup" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(false);
  });

  it(`defaults to unset for elements with role of select`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="select" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(false);
  });

  it(`defaults to unset for elements with role of treegrid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="treegrid" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("orientation")).toBe(false);
  });
});
