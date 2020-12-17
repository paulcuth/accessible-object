import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("describedBy", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("describedBy")).toBe(false);
  });

  it(`has property when value is a valid id`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-describedby="summary"></div>
        <div id="summary" data-testid="summary">
          Summary
        </div>
      </>
    );
    expect(accessibleObject.hasOwnProperty("describedBy")).toBe(true);
    expect(accessibleObject.describedBy).toHaveLength(1);
    expect(accessibleObject.describedBy).toContain(getByTestId("summary"));
  });

  it(`can handle multiple element references`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div
          data-testid="subject"
          aria-describedby="summary-1 summary-2 summary-3"
        ></div>
        <div id="summary-1" data-testid="summary-1">
          Summary
        </div>
        <div id="summary-2" data-testid="summary-2">
          Another summary
        </div>
        <div id="summary-3" data-testid="summary-3">
          And another
        </div>
      </>
    );
    expect(accessibleObject.hasOwnProperty("describedBy")).toBe(true);
    expect(accessibleObject.describedBy).toHaveLength(3);
    expect(accessibleObject.describedBy).toContain(getByTestId("summary-1"));
    expect(accessibleObject.describedBy).toContain(getByTestId("summary-2"));
    expect(accessibleObject.describedBy).toContain(getByTestId("summary-3"));
  });

  it(`ignores invalid element references`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div
          data-testid="subject"
          aria-describedby="summary summary-2 summary-3"
        ></div>
        <div id="summary" data-testid="summary">
          Summary
        </div>
      </>
    );
    expect(accessibleObject.hasOwnProperty("describedBy")).toBe(true);
    expect(accessibleObject.describedBy).toHaveLength(1);
    expect(accessibleObject.describedBy).toContain(getByTestId("summary"));
  });

  it(`sets property to an empty array if all ids invalid`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-describedby="summary-1 summary-2"></div>
      </>
    );
    expect(accessibleObject.hasOwnProperty("describedBy")).toBe(true);
    expect(accessibleObject.describedBy).toHaveLength(0);
  });
});
