import {
  computeAccessibleDescription,
  computeAccessibleName,
  getRole,
} from "dom-accessibility-api";

import { AccessibleObject, Role } from "./types";
import properties from "./properties";

export default (element: Element): AccessibleObject => {
  const init: AccessibleObject = {
    role: getRole(element) as Role,
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
