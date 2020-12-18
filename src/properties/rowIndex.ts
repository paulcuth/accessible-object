import { getRole } from "dom-accessibility-api";

import { AccessibleObject, Role } from "../types";
import getIntegerAttributeValue from "../utils/getIntegerAttributeValue";
import findParentWithRole from "../utils/findParentWithRole";
import getChildren from "../utils/getChildren";

const VALID_ROLES = ["cell", "row", "columnheader", "gridcell", "rowheader"];
const VALID_PARENT_ROLES = ["table", "grid", "treegrid"];

export const name = "rowIndex";

export const resolver = (
  result: AccessibleObject,
  element: Element
): number | null => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  // If there's an aria value, return that
  const ariaValue = getIntegerAttributeValue(element, "aria-rowindex", {
    min: 1,
  });

  if (ariaValue != null) {
    return ariaValue;
  }

  // If element is not a row, find its row and resolve that…
  if (result.role !== "row") {
    const row = findParentWithRole(element, ["row"]);
    const fakeResult = { role: "row" as Role, name: "" };
    return row === null ? null : resolver(fakeResult, row);
  }

  // Find the element with the matching parent role
  const parent = findParentWithRole(element, VALID_PARENT_ROLES);

  // If no parent, we can't compute the position
  if (parent == null) {
    return null;
  }

  // Find siblings
  const rows = findAllRows(parent);
  // @ts-ignore
  result.rows = rows;
  const position = rows.indexOf(element);

  return position === -1 ? null : position + 1;
};

const findAllRows = (element: Element): Array<Element> => {
  // const children = Array.from(element.children);
  const children = getChildren(element);
  return children.reduce((result: Array<Element>, child: Element) => {
    const role = getRole(child);
    switch (role) {
      case "row":
        return [...result, child];
      case "rowgroup":
        return [...result, ...findAllRows(child)];
      default:
        return result;
    }
  }, []);
};
