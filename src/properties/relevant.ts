import getBooleanAriaAttributeValue from "../utils/getBooleanAriaAttributeValue";
import getBooleanHtmlAttributeValue from "../utils/getBooleanHtmlAttributeValue";
import { AccessibleObject } from "../types";

const ALL_VALID_VALUES = ["additions", "removals", "text"];

export const name = "relevant";

export const resolver = (
  result: AccessibleObject,
  element: Element
): Array<"additions" | "removals" | "text"> | null => {
  // Only add to live regions
  if (result.live == null) {
    return null;
  }

  const ariaValue = element.getAttribute("aria-relevant");
  if (ariaValue == null || ariaValue === "") {
    return ["additions", "text"];
  }

  // $FlowIgnore
  const values = ariaValue
    .split(" ")
    .filter((v) => v === "all" || ALL_VALID_VALUES.includes(v));
  return (values.includes("all") ? ALL_VALID_VALUES : values) as Array<
    "text" | "additions" | "removals"
  >;
};
