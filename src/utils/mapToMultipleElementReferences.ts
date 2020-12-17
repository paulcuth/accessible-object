import getMultipleElementReferences from "./getMultipleElementReferences";
import { AccessibleObject } from "../types";

export default (attr: string) => {
  return (result: AccessibleObject, element: Element) =>
    getMultipleElementReferences(element, attr);
};
