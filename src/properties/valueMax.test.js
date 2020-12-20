import React from "react";

import computeAccessibleObject from "../";
import renderAndComputeAccessibleObject from "../utils/renderAndComputeAccessibleObject";

describe("valueMax", () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject"></div>
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(false);
  });

  it(`doesn't have property when attribute specified on invalid role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="list" data-testid="subject" aria-valuemax="10"></div>
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(false);
  });

  it(`has property when attribute specified on element with range role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="range" data-testid="subject" aria-valuemax="10"></div>
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
    expect(accessibleObject.valueMax).toBe(10);
  });

  it(`has property when attribute specified on element with scrollbar role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="scrollbar" data-testid="subject" aria-valuemax="10"></div>
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
    expect(accessibleObject.valueMax).toBe(10);
  });

  it(`doesn't have property when attribute specified on element with structural separator role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="separator" data-testid="subject" aria-valuemax="10"></div>
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(false);
  });

  it(`has property when attribute specified on element with widget separator role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div
        role="separator"
        tabIndex={0}
        data-testid="subject"
        aria-valuemax="10"
      ></div>
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
    expect(accessibleObject.valueMax).toBe(10);
  });

  it(`has property when attribute specified on element with slider role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="slider" data-testid="subject" aria-valuemax="10"></div>
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
    expect(accessibleObject.valueMax).toBe(10);
  });

  it(`has property when attribute specified on element with spinbutton role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="spinbutton" data-testid="subject" aria-valuemax="10"></div>
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
    expect(accessibleObject.valueMax).toBe(10);
  });

  it(`has property when attribute specified on element with progressbar role`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="progressbar" data-testid="subject" aria-valuemax="10"></div>
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
    expect(accessibleObject.valueMax).toBe(10);
  });

  // TODO: Uncomment these tests once I've figured out what to do with input
  //       types that don't map to a role.

  // it(`prioritises native value if available in date input`, async () => {
  //   const { accessibleObject } = renderAndComputeAccessibleObject(
  //     <input type="date" data-testid="subject" max="5" aria-valuemax="10" />
  //   );
  //   expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
  //   expect(accessibleObject.valueMax).toBe(5);
  // });

  // it(`prioritises native value if available in month input`, async () => {
  //   const { accessibleObject } = renderAndComputeAccessibleObject(
  //     <input type="month" data-testid="subject" max="5" aria-valuemax="10" />
  //   );
  //   expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
  //   expect(accessibleObject.valueMax).toBe(5);
  // });

  // it(`prioritises native value if available in week input`, async () => {
  //   const { accessibleObject } = renderAndComputeAccessibleObject(
  //     <input type="week" data-testid="subject" max="5" aria-valuemax="10" />
  //   );
  //   expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
  //   expect(accessibleObject.valueMax).toBe(5);
  // });

  // it(`prioritises native value if available in time input`, async () => {
  //   const { accessibleObject } = renderAndComputeAccessibleObject(
  //     <input type="time" data-testid="subject" max="5" aria-valuemax="10" />
  //   );
  //   expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
  //   expect(accessibleObject.valueMax).toBe(5);
  // });

  // it(`prioritises native value if available in datetime-local input`, async () => {
  //   const { accessibleObject } = renderAndComputeAccessibleObject(
  //     <input
  //       type="datetime-local"
  //       data-testid="subject"
  //       max="5"
  //       aria-valuemax="10"
  //     />
  //   );
  //   expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
  //   expect(accessibleObject.valueMax).toBe(5);
  // });

  it(`prioritises native value if available in number input`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input type="number" data-testid="subject" max="5" aria-valuemax="10" />
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
    expect(accessibleObject.valueMax).toBe(5);
  });

  it(`prioritises native value if available in range input`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input type="range" data-testid="subject" max="5" aria-valuemax="10" />
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
    expect(accessibleObject.valueMax).toBe(5);
  });

  it(`prioritises native value if available in progress element`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <progress data-testid="subject" max="5" aria-valuemax="10" />
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
    expect(accessibleObject.valueMax).toBe(5);
  });

  it(`prioritises native value if available in meter element`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <meter data-testid="subject" max="5" aria-valuemax="10" />
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
    expect(accessibleObject.valueMax).toBe(5);
  });

  it(`allows floating point numbers`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input type="range" data-testid="subject" aria-valuemax="1.23" />
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
    expect(accessibleObject.valueMax).toBe(1.23);
  });

  it(`uses native value if aria value not available in date input`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input type="range" data-testid="subject" max="5" />
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
    expect(accessibleObject.valueMax).toBe(5);
  });

  it(`uses aria value if native value is not valid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input type="range" data-testid="subject" max="nan" aria-valuemax="10" />
    );
    expect(accessibleObject.hasOwnProperty("valueMax")).toBe(true);
    expect(accessibleObject.valueMax).toBe(10);
  });
});
