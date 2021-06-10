import getBooleanAriaAttributeValue from "./getBooleanAriaAttributeValue";
import { AccessibleObject } from "../types";

type Options = {
  roles?: Array<string>;
};

export default (attr: string, options: Options = {}) => {
  return (result: AccessibleObject, element: Element) => {
    const { roles } = options;

    if (roles != null && (result.role == null || !roles.includes(result.role))) {
      return null;
    }

    return getBooleanAriaAttributeValue(element, attr);
  };
};
