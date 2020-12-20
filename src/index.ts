import {
  computeAccessibleDescription,
  computeAccessibleName,
  getRole,
} from "dom-accessibility-api";

import { AccessibleObject, Role } from "./types";
import properties from "./properties";

export default (element: Element): AccessibleObject => {
  const init: AccessibleObject = {
    role: computeRole(element),
    name: computeAccessibleName(element),
    description: computeAccessibleDescription(element),
  };

  const accessibleObject: AccessibleObject = properties.reduce(
    (result, property) => {
      const value = property.resolver(result, element);
      if (value != null) {
        const name = property.name as keyof AccessibleObject;
        mutateObj(result, name, value);
      }
      return result;
    },
    init
  );

  return accessibleObject;
};

const mutateObj = <T extends AccessibleObject, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
) => {
  obj[key] = value;
};

const computeRole = (element: Element): Role | null => {
  // Use value from `dom-accessibility-api` if returned...
  const role = getRole(element) as Role;
  if (role != null) {
    return role;
  }

  // ...and fill in the blanks
  const { tagName, type } = element as HTMLInputElement;

  if (tagName === "METER") {
    return "progressbar";
  }

  if (tagName === "INPUT" && type === "number") {
    return "spinbutton";
  }

  return null;
};
