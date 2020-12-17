import getIntegerAttributeValue, { Options } from "./getIntegerAttributeValue";
import { AccessibleObject } from "../types";

export default (attr: string, options: Options) => {
  return (result: AccessibleObject, element: Element) =>
    getIntegerAttributeValue(element, attr, options);
};
