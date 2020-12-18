import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("rowSpan", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject"></div>
    );
    expect(accessibleObject.hasOwnProperty("rowSpan")).toBe(false);
  });

  it(`doesn't have property when attribute is specified on invalid elements`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-rowspan="5"></div>
    );
    expect(accessibleObject.hasOwnProperty("rowSpan")).toBe(false);
  });

  it(`has property when attribute is specified on a cell`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="cell" data-testid="subject" aria-rowspan="3"></div>
    );
    expect(accessibleObject.hasOwnProperty("rowSpan")).toBe(true);
    expect(accessibleObject.rowSpan).toBe(3);
  });

  it(`has property when attribute is specified on a columnheader`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="columnheader" data-testid="subject" aria-rowspan="3"></div>
    );
    expect(accessibleObject.hasOwnProperty("rowSpan")).toBe(true);
    expect(accessibleObject.rowSpan).toBe(3);
  });

  it(`has property when attribute is specified on a gridcell`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="gridcell" data-testid="subject" aria-rowspan="2"></div>
    );
    expect(accessibleObject.hasOwnProperty("rowSpan")).toBe(true);
    expect(accessibleObject.rowSpan).toBe(2);
  });

  it(`has property when attribute is specified on a rowheader`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="rowheader" data-testid="subject" aria-rowspan="1"></div>
    );
    expect(accessibleObject.hasOwnProperty("rowSpan")).toBe(true);
    expect(accessibleObject.rowSpan).toBe(1);
  });

  it(`can't have a value of 0`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="cell" data-testid="subject" aria-rowspan="0"></div>
    );
    expect(accessibleObject.hasOwnProperty("rowSpan")).toBe(false);
  });

  it(`ignores the aria value when it conflicts with native semantics [explicit]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <table>
        <tbody>
          <tr>
            <td data-testid="subject" rowSpan="2" aria-rowspan="3"></td>
          </tr>
        </tbody>
      </table>
    );
    expect(accessibleObject.hasOwnProperty("rowSpan")).toBe(true);
    expect(accessibleObject.rowSpan).toBe(2);
  });

  it(`ignores the aria value when it conflicts with native semantics [implicit]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <table>
        <tbody>
          <tr>
            <td data-testid="subject" aria-rowspan="3"></td>
          </tr>
        </tbody>
      </table>
    );
    expect(accessibleObject.hasOwnProperty("rowSpan")).toBe(true);
    expect(accessibleObject.rowSpan).toBe(1);
  });
});
