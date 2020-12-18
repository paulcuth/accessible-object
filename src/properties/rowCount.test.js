import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("rowCount", () => {
  it(`doesn't have property when specified on invalid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-rowcount="2" />
    );
    expect(accessibleObject.hasOwnProperty("rowCount")).toBe(false);
  });

  it(`has property when specified on element with table role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="table" data-testid="subject" aria-rowcount="2" />
    );
    expect(accessibleObject.hasOwnProperty("rowCount")).toBe(true);
    expect(accessibleObject.rowCount).toBe(2);
  });

  it(`has property when specified on element with grid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid" data-testid="subject" aria-rowcount="2000" />
    );
    expect(accessibleObject.hasOwnProperty("rowCount")).toBe(true);
    expect(accessibleObject.rowCount).toBe(2000);
  });

  it(`has property when specified on element with treegrid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="treegrid" data-testid="subject" aria-rowcount="1" />
    );
    expect(accessibleObject.hasOwnProperty("rowCount")).toBe(true);
    expect(accessibleObject.rowCount).toBe(1);
  });

  it(`can have value of 0`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid" data-testid="subject" aria-rowcount="0" />
    );
    expect(accessibleObject.hasOwnProperty("rowCount")).toBe(true);
    expect(accessibleObject.rowCount).toBe(0);
  });

  it(`can have value of -1`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid" data-testid="subject" aria-rowcount="-1" />
    );
    expect(accessibleObject.hasOwnProperty("rowCount")).toBe(true);
    expect(accessibleObject.rowCount).toBe(-1);
  });

  it(`can't have value of -2`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid" data-testid="subject" aria-rowcount="-2" />
    );
    expect(accessibleObject.hasOwnProperty("rowCount")).toBe(true);
    expect(accessibleObject.rowCount).toBe(0);
  });

  it(`computes property when attribute not specified on empty container`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("rowCount")).toBe(true);
    expect(accessibleObject.rowCount).toBe(0);
  });

  it(`computes the row count when not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid" data-testid="subject">
        <div role="row" />
        <div role="row" />
        <div role="rowgroup">
          <div role="row" />
          <div role="row" />
        </div>
        <div role="rowgroup">
          <div role="row" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowCount")).toBe(true);
    expect(accessibleObject.rowCount).toBe(5);
  });

  it(`computes the row count from native semantics when not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <table data-testid="subject">
        <thead>
          <tr>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
    expect(accessibleObject.hasOwnProperty("rowCount")).toBe(true);
    expect(accessibleObject.rowCount).toBe(4);
  });
});
