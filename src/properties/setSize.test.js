import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("setSize", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject"></div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(false);
  });

  it(`doesn't have property when role is invalid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-setsize="6"></div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(false);
  });

  it(`has property when set on element with article role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="article" data-testid="subject" aria-setsize="3"></div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(3);
  });

  it(`has property when set on element with listitem role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listitem" data-testid="subject" aria-setsize="3"></div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(3);
  });

  it(`has property when set on element with menuitem role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menuitem" data-testid="subject" aria-setsize="3"></div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(3);
  });

  it(`has property when set on element with option role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="option" data-testid="subject" aria-setsize="3"></div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(3);
  });

  it(`has property when set on element with radio role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="radio" data-testid="subject" aria-setsize="3"></div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(3);
  });

  it(`has property when set on element with tab role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tab" data-testid="subject" aria-setsize="3"></div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(3);
  });

  it(`has property when set on element with menuitemcheckbox role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menuitemcheckbox" data-testid="subject" aria-setsize="3"></div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(3);
  });

  it(`has property when set on element with menuitemradio role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menuitemradio" data-testid="subject" aria-setsize="3"></div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(3);
  });

  it(`has property when set on element with treeitem role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="treeitem" data-testid="subject" aria-setsize="3"></div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(3);
  });

  it(`can have a value of 1`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="list">
        <div role="listitem" data-testid="subject" aria-setsize="1"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(1);
  });

  it(`can't have a value of 0`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="list">
        <div role="listitem" data-testid="subject" aria-setsize="0"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(1); // Computed
  });

  it(`can have a value of -1`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="list">
        <div role="listitem" data-testid="subject" aria-setsize="-1"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(-1);
  });

  it(`can't have a value of -2`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="list">
        <div role="listitem" data-testid="subject" aria-setsize="-2"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(1); // Computed
  });

  it(`computes property when not provided for article in feed [1]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="feed">
        <div role="article" data-testid="subject"></div>
        <div role="article"></div>
        <div role="article"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(3);
  });

  it(`computes property when not provided for article in feed [2]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="feed">
        <div role="article"></div>
        <div role="article" data-testid="subject"></div>
        <div role="article"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(3);
  });

  it(`computes property when not provided for article in feed [3]`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="feed">
        <div role="article"></div>
        <div role="article"></div>
        <div role="article" data-testid="subject"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(3);
  });

  it(`doesn't computes property when not provided for article not in feed`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div>
        <div role="article" data-testid="subject"></div>
        <div role="article"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(false);
  });

  it(`computes property when not provided for listitem in list`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="list">
        <div role="listitem" data-testid="subject"></div>
        <div role="listitem"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(2);
  });

  it(`doesn't computes property when not provided for listitem not in list`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div>
        <div role="listitem" data-testid="subject"></div>
        <div role="listitem"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(false);
  });

  it(`computes property when not provided for menuitem in menu`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="menuitem" data-testid="subject"></div>
        <div role="menuitem"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(2);
  });

  it(`doesn't computes property when not provided for menuitem not in menu`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div>
        <div role="menuitem" data-testid="subject"></div>
        <div role="menuitem"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(false);
  });

  it(`computes property when not provided for menuitem in menubar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar">
        <div role="menuitem" data-testid="subject"></div>
        <div role="menuitem"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(2);
  });

  it(`doesn't computes property when not provided for menuitem not in menubar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div>
        <div role="menuitem" data-testid="subject"></div>
        <div role="menuitem"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(false);
  });

  it(`computes property when not provided for option in listbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="listbox">
        <div role="option" data-testid="subject"></div>
        <div role="option"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(2);
  });

  it(`doesn't computes property when not provided for option not in listbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div>
        <div role="option" data-testid="subject"></div>
        <div role="option"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(false);
  });

  it(`computes property when not provided for radio in radiogroup`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="radiogroup">
        <div role="radio" data-testid="subject"></div>
        <div role="radio"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(2);
  });

  it(`doesn't computes property when not provided for radio not in radiogroup`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div>
        <div role="radio" data-testid="subject"></div>
        <div role="radio"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(false);
  });

  it(`computes property when not provided for tab in tablist`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tablist">
        <div role="tab" data-testid="subject"></div>
        <div role="tab"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(2);
  });

  it(`doesn't computes property when not provided for tab not in tablist`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div>
        <div role="tab" data-testid="subject"></div>
        <div role="tab"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(false);
  });

  it(`computes property when not provided for menuitemcheckbox in menu`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="menuitemcheckbox" data-testid="subject"></div>
        <div role="menuitemcheckbox"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(2);
  });

  it(`doesn't computes property when not provided for menuitemcheckbox not in menu`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div>
        <div role="menuitemcheckbox" data-testid="subject"></div>
        <div role="menuitemcheckbox"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(false);
  });

  it(`computes property when not provided for menuitemcheckbox in menubar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar">
        <div role="menuitemcheckbox" data-testid="subject"></div>
        <div role="menuitemcheckbox"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(2);
  });

  it(`doesn't computes property when not provided for menuitemcheckbox not in menubar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div>
        <div role="menuitemcheckbox" data-testid="subject"></div>
        <div role="menuitemcheckbox"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(false);
  });

  it(`computes property when not provided for menuitemradio in menu`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="menuitemradio" data-testid="subject"></div>
        <div role="menuitemradio"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(2);
  });

  it(`doesn't computes property when not provided for menuitemradio not in menu`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div>
        <div role="menuitemradio" data-testid="subject"></div>
        <div role="menuitemradio"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(false);
  });

  it(`computes property when not provided for menuitemradio in menubar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menubar">
        <div role="menuitemradio" data-testid="subject"></div>
        <div role="menuitemradio"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(2);
  });

  it(`doesn't computes property when not provided for menuitemradio not in menubar`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div>
        <div role="menuitemradio" data-testid="subject"></div>
        <div role="menuitemradio"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(false);
  });

  it(`computes property when not provided for treeitem in tree`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="tree">
        <div role="treeitem" data-testid="subject"></div>
        <div role="treeitem"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(2);
  });

  it(`doesn't computes property when not provided for treeitem not in tree`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div>
        <div role="treeitem" data-testid="subject"></div>
        <div role="treeitem"></div>
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(false);
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
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(4);
  });

  it(`computes property when child is owned and not contained in DOM [1]`, async () => {
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
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(true);
    expect(accessibleObject.setSize).toBe(4);
  });

  it(`doesn't compute property when contained in invalid parent role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="menu">
        <div role="listitem" data-testid="subject" />
      </div>
    );
    expect(accessibleObject.hasOwnProperty("setSize")).toBe(false);
  });
});
