// @flow strict

import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("posInSet", () => {
  it(`doesn't have property when element has invalid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-posinset="1" />
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(false);
  });

  it(`has property when listitem contained in list`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="list">
        <div role="listitem" data-testid="subject" aria-posinset="2" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when listitem contained in group in list`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="list">
        <div role="group">
          <div role="listitem" data-testid="subject" aria-posinset="2" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when article contained in feed`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="feed">
        <div role="article" data-testid="subject" aria-posinset="2" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when menuitem contained in menu`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="menuitem" data-testid="subject" aria-posinset="2" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when menuitem contained in menubar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar">
        <div role="menuitem" data-testid="subject" aria-posinset="2" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when menuitem contained in group in menu`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="group">
          <div role="menuitem" data-testid="subject" aria-posinset="2" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when menuitem contained in group in menubar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar">
        <div role="group">
          <div role="menuitem" data-testid="subject" aria-posinset="2" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when option contained in listbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listbox">
        <div role="option" data-testid="subject" aria-posinset="2" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when radio contained in radiogroup`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="radiogroup">
        <div role="radio" data-testid="subject" aria-posinset="2" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when tab contained in tablist`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tablist">
        <div role="tab" data-testid="subject" aria-posinset="2" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when menuitemcheckbox contained in menu`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="menuitemcheckbox" data-testid="subject" aria-posinset="2" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when menuitemcheckbox contained in menubar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar">
        <div role="menuitemcheckbox" data-testid="subject" aria-posinset="2" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when menuitemradio contained in menu`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="menuitemradio" data-testid="subject" aria-posinset="2" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when menuitemradio contained in menubar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar">
        <div role="menuitemradio" data-testid="subject" aria-posinset="2" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when menuitemradio contained in group in menu`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="group">
          <div role="menuitemradio" data-testid="subject" aria-posinset="2" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when menuitemradio contained in group in menubar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar">
        <div role="group">
          <div role="menuitemradio" data-testid="subject" aria-posinset="2" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when treeitem contained in tree`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tree">
        <div role="treeitem" data-testid="subject" aria-posinset="2" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`has property when treeitem contained in group in tree`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tree">
        <div role="group">
          <div role="treeitem" data-testid="subject" aria-posinset="2" />
        </div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`computes property when not specified for listitem contained in list [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="list">
        <div role="listitem" data-testid="subject" />
        <div role="listitem" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(1);
  });

  it(`computes property when not specified for listitem contained in list [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="list">
        <div role="listitem" />
        <div role="listitem" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`computes property when not specified for menuitem contained in menu [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="group">
          <div role="menuitem" data-testid="subject" />
          <div role="menuitem" />
          <div role="menuitem" />
        </div>
        <div role="menuitem" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(1);
  });

  it(`computes property when not specified for menuitem contained in menu [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="group">
          <div role="menuitem" />
          <div role="menuitem" data-testid="subject" />
          <div role="menuitem" />
        </div>
        <div role="menuitem" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`computes property when not specified for menuitem contained in menu [3]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="group">
          <div role="menuitem" />
          <div role="menuitem" />
          <div role="menuitem" data-testid="subject" />
        </div>
        <div role="menuitem" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(3);
  });

  it(`computes property when not specified for menuitem contained in menu [4]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="group">
          <div role="menuitem" />
          <div role="menuitem" />
          <div role="menuitem" />
        </div>
        <div role="menuitem" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`computes property when not specified for menuitem contained in menubar [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar">
        <div role="menuitem" data-testid="subject" />
        <div role="menuitem" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(1);
  });

  it(`computes property when not specified for menuitem contained in menubar [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar">
        <div role="menuitem" />
        <div role="menuitem" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`computes property when not specified for option contained in listbox [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listbox">
        <div role="option" data-testid="subject" />
        <div role="option" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(1);
  });

  it(`computes property when not specified for option contained in listbox [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listbox">
        <div role="option" />
        <div role="option" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`computes property when not specified for radio contained in radiogroup [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="radiogroup">
        <div role="radio" data-testid="subject" />
        <div role="radio" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(1);
  });

  it(`computes property when not specified for radio contained in radiogroup [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="radiogroup">
        <div role="radio" />
        <div role="radio" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`computes property when not specified for tab contained in tablist [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tablist">
        <div role="tab" data-testid="subject" />
        <div role="tab" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(1);
  });

  it(`computes property when not specified for tab contained in tablist [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tablist">
        <div role="tab" />
        <div role="tab" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`computes property when not specified for menuitemcheckbox contained in menu [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="menuitemcheckbox" data-testid="subject" />
        <div role="menuitemcheckbox" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(1);
  });

  it(`computes property when not specified for menuitemcheckbox contained in menu [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="menuitemcheckbox" />
        <div role="menuitemcheckbox" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`computes property when not specified for menuitemcheckbox contained in menubar [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar">
        <div role="menuitemcheckbox" data-testid="subject" />
        <div role="menuitemcheckbox" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(1);
  });

  it(`computes property when not specified for menuitemcheckbox contained in menubar [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar">
        <div role="menuitemcheckbox" />
        <div role="menuitemcheckbox" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`computes property when not specified for menuitemradio contained in menu [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="menuitemradio" data-testid="subject" />
        <div role="menuitemradio" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(1);
  });

  it(`computes property when not specified for menuitemradio contained in menu [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="menuitemradio" />
        <div role="menuitemradio" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`computes property when not specified for menuitemradio contained in menubar [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar">
        <div role="menuitemradio" data-testid="subject" />
        <div role="menuitemradio" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(1);
  });

  it(`computes property when not specified for menuitemradio contained in menubar [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar">
        <div role="menuitemradio" />
        <div role="menuitemradio" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`computes property when not specified for treeitem contained in tree [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tree">
        <div role="treeitem" data-testid="subject" />
        <div role="treeitem" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(1);
  });

  it(`computes property when not specified for treeitem contained in tree [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tree">
        <div role="treeitem" />
        <div role="treeitem" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(2);
  });

  it(`computes property when child is owned and not contained in DOM [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <>
        <div role="menu" aria-owns="child-3 child-4">
          <div role="menuitem" />
          <div role="menuitem" />
        </div>
        <div id="child-3" role="menuitem" data-testid="subject" />
        <div id="child-4" role="menuitem" />
      </>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(3);
  });

  it(`computes property when child is owned and not contained in DOM [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <>
        <div role="menu" aria-owns="child-3 child-4">
          <div role="menuitem" />
          <div role="menuitem" />
        </div>
        <div id="child-3" role="menuitem" />
        <div id="child-4" role="menuitem" data-testid="subject" />
      </>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(true);
    expect(accessibleObject.posInSet).toBe(4);
  });

  it(`doesn't compute property when contained in invalid parent role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="listitem" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("posInSet")).toBe(false);
  });
});
