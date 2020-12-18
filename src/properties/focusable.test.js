import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("focusable", () => {
  it(`is set to false on a non-focusable element`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(false);
  });

  it(`is set to false on an anchor with no href`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <a data-testid="subject">Link text</a>
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(false);
  });

  it(`is set to true on an anchor with href`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <a href="url" data-testid="subject">
        Link text
      </a>
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(true);
  });

  it(`is set to false on an image map area with no href`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <area data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(false);
  });

  it(`is set to true on an image map area with href`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <area href="url" data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(true);
  });

  it(`is set to false on an input that is disabled`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" disabled />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(false);
  });

  it(`is set to true on an input that is not disabled`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(true);
  });

  it(`is set to false on an select that is disabled`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <select data-testid="subject" disabled />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(false);
  });

  it(`is set to true on an select that is not disabled`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <select data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(true);
  });

  it(`is set to false on an textarea that is disabled`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <textarea data-testid="subject" disabled />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(false);
  });

  it(`is set to true on an textarea that is not disabled`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <textarea data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(true);
  });

  it(`is set to false on an button that is disabled`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <button data-testid="subject" disabled />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(false);
  });

  it(`is set to true on an button that is not disabled`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <button data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(true);
  });

  it(`is set to true on an iframe`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <iframe data-testid="subject" />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(true);
  });

  it(`is set to true on an element with contenteditable`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" contentEditable />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(true);
  });

  it(`is set to true on an element with tabindex is 1`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" tabIndex="1" />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(true);
  });

  it(`is set to true on an element with tabindex is 0`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" tabIndex="0" />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(true);
  });

  it(`is set to true on an element with tabindex is -1`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" tabIndex="-1" />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(true);
  });

  it(`is set to true on an element with tabindex is -2`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" tabIndex="-2" />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(true);
  });

  it(`is set to true on an anchor with tabindex and no href`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <a data-testid="subject" tabIndex="0">
        Link text
      </a>
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(true);
  });

  it(`is set to false on a disabled input with tabindex`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" tabIndex="0" disabled />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(false);
  });

  it(`is set to true on a contenteditable div with negative tabindex`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" tabIndex="-1" contentEditable />
    );
    expect(accessibleObject.hasOwnProperty("focusable")).toBe(true);
    expect(accessibleObject.focusable).toBe(true);
  });
});
