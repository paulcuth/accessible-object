import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("rowIndex", () => {
  it(`doesn't have property when element has invalid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-rowindex="1" />
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(false);
  });

  it(`has property when row contained in table`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="table">
        <div role="row" data-testid="subject" aria-rowindex="2" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(2);
  });

  it(`has property when row contained in rowgroup in table`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="table">
        <div role="rowgroup">
          <div role="row" data-testid="subject" aria-rowindex="2" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(2);
  });

  it(`has property when row contained in grid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid">
        <div role="row" data-testid="subject" aria-rowindex="2" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(2);
  });

  it(`has property when row contained rowgroup in grid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid">
        <div role="rowgroup">
          <div role="row" data-testid="subject" aria-rowindex="2" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(2);
  });

  it(`has property when cell contained in row in a table`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="table">
        <div role="row">
          <div role="cell" data-testid="subject" aria-rowindex="2" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(2);
  });

  it(`has property when cell contained in row in a rowgroup in a table`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="table">
        <div role="rowgroup">
          <div role="row">
            <div role="cell" data-testid="subject" aria-rowindex="2" />
          </div>
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(2);
  });

  it(`has property when gridcell contained in row in a grid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid">
        <div role="row">
          <div role="gridcell" data-testid="subject" aria-rowindex="3" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(3);
  });

  it(`has property when gridcell contained in row in a rowgroup in a grid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid">
        <div role="rowgroup">
          <div role="row">
            <div role="gridcell" data-testid="subject" aria-rowindex="3" />
          </div>
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(3);
  });

  it(`has property when columnheader contained in row in a grid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid">
        <div role="row">
          <div role="columnheader" data-testid="subject" aria-rowindex="3" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(3);
  });

  it(`has property when columnheader contained in row in a rowgroup in a grid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid">
        <div role="rowgroup">
          <div role="row">
            <div role="columnheader" data-testid="subject" aria-rowindex="3" />
          </div>
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(3);
  });

  it(`has property when rowheader contained in row in a grid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid">
        <div role="row">
          <div role="rowheader" data-testid="subject" aria-rowindex="3" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(3);
  });

  it(`has property when rowheader contained in row in a rowgroup in a grid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid">
        <div role="rowgroup">
          <div role="row">
            <div role="rowheader" data-testid="subject" aria-rowindex="3" />
          </div>
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(3);
  });

  it(`has property when cell contained in row with a rowindex in a table`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="table">
        <div role="row" aria-rowindex="4">
          <div role="cell" data-testid="subject" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(4);
  });

  it(`has property when gridcell contained in row with a rowindex in a grid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid">
        <div role="row" aria-rowindex="4">
          <div role="gridcell" data-testid="subject" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(4);
  });

  it(`computes property when not specified for row contained in table [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="table">
        <div role="row" data-testid="subject" />
        <div role="row" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(1);
  });

  it(`computes property when not specified for row contained in table [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="table">
        <div role="row" />
        <div role="row" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(2);
  });

  it(`computes property when not specified for row contained in grid [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid">
        <div role="row" data-testid="subject" />
        <div role="row" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(1);
  });

  it(`computes property when not specified for row contained in grid [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid">
        <div role="row" />
        <div role="row" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(2);
  });

  it(`computes property when not specified for row contained in rowgroup in table [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="table">
        <div role="rowgroup">
          <div role="row" data-testid="subject" />
          <div role="row" />
        </div>
        <div role="row" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(1);
  });

  it(`computes property when not specified for row contained in rowgroup in table [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="table">
        <div role="rowgroup">
          <div role="row" />
          <div role="row" data-testid="subject" />
        </div>
        <div role="row" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(2);
  });

  it(`computes property when not specified for row contained in rowgroup in table [3]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="table">
        <div role="rowgroup">
          <div role="row" />
          <div role="row" />
        </div>
        <div role="row" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(3);
  });

  it(`computes property when not specified for row contained in rowgroup in grid [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid">
        <div role="rowgroup">
          <div role="row" data-testid="subject" />
          <div role="row" />
        </div>
        <div role="row" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(1);
  });

  it(`computes property when not specified for row contained in rowgroup in grid [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid">
        <div role="rowgroup">
          <div role="row" />
          <div role="row" data-testid="subject" />
        </div>
        <div role="row" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(2);
  });

  it(`computes property when not specified for row contained in rowgroup in grid [3]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="grid">
        <div role="rowgroup">
          <div role="row" />
          <div role="row" />
        </div>
        <div role="row" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(3);
  });

  it(`computes property when not specified for cell in table [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="table">
        <div role="rowgroup">
          <div role="row">
            <div role="cell" data-testid="subject" />
          </div>
          <div role="row">
            <div role="cell" />
          </div>
        </div>
        <div role="row">
          <div role="cell" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(1);
  });

  it(`computes property when not specified for cell in table [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="table">
        <div role="rowgroup">
          <div role="row">
            <div role="cell" />
          </div>
          <div role="row">
            <div role="cell" data-testid="subject" />
          </div>
        </div>
        <div role="row">
          <div role="cell" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(2);
  });

  it(`computes property when not specified for cell in table [3]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="table">
        <div role="rowgroup">
          <div role="row">
            <div role="cell" />
          </div>
          <div role="row">
            <div role="cell" />
          </div>
        </div>
        <div role="row">
          <div role="cell" data-testid="subject" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(3);
  });

  it(`computes property when child is owned and not contained in DOM [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <>
        <div role="table" aria-owns="child-3 child-4">
          <div role="row" />
          <div role="row" />
        </div>
        <div id="child-3" role="row" data-testid="subject" />
        <div id="child-4" role="row" />
      </>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(3);
  });

  it(`computes property when child is owned and not contained in DOM [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <>
        <div role="table" aria-owns="child-3 child-4">
          <div role="row" />
          <div role="row" />
        </div>
        <div id="child-3" role="row" />
        <div id="child-4" role="row" data-testid="subject" />
      </>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(true);
    expect(accessibleObject.rowIndex).toBe(4);
  });

  it(`doesn't compute property when contained in invalid parent role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="table">
        <div role="gridcell" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("rowIndex")).toBe(false);
  });
});
