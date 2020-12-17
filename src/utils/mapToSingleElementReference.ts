import getSingleElementReference from "./getSingleElementReference";
import { AccessibleObject } from "../types";

export default (attr: string) => {
  return (result: AccessibleObject, element: Element) =>
    getSingleElementReference(element, attr);
};
