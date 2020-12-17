import { render } from "@testing-library/react";
import { ReactElement } from "react";

import computeAccessibleObject from "../";

export default (jsx: ReactElement) => {
  const result = render(jsx);
  const element = result.getByTestId("subject");
  const accessibleObject = computeAccessibleObject(element);
  return {
    ...result,
    accessibleObject,
  };
};
