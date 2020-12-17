import getEnumAttributeValue from "../utils/getEnumAttributeValue";
import { AccessibleObject } from "../types";

const VALID_ROLES = ["textbox", "searchbox", "combobox"];
const VALID_ARIA_VALUES = ["inline", "list", "both"];
const VALID_HTML_VALUES = [
  "on",
  "name",
  "honorific-prefix",
  "given-name",
  "additional-name",
  "family-name",
  "honorific-suffix",
  "nickname",
  "email",
  "username",
  "new-password",
  "current-password",
  "one-time-code",
  "organization-title",
  "organization",
  "street-address",
  "address-line1",
  "address-line2",
  "address-line3",
  "address-level4",
  "address-level3",
  "address-level2",
  "address-level1",
  "country",
  "country-name",
  "postal-code",
  "cc-name",
  "cc-given-name",
  "cc-additional-name",
  "cc-family-name",
  "cc-number",
  "cc-exp",
  "cc-exp-month",
  "cc-exp-year",
  "cc-csc",
  "cc-type",
  "transaction-currency",
  "transaction-amount",
  "language",
  "bday",
  "bday-day",
  "bday-month",
  "bday-year",
  "sex",
  "tel",
  "tel-country-code",
  "tel-national",
  "tel-area-code",
  "tel-local",
  "tel-extension",
  "impp",
  "url",
  "photo",
];

export const name = "autoComplete";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  // Aria value takes precedence...
  const ariaValue = getEnumAttributeValue(
    element,
    "aria-autocomplete",
    VALID_ARIA_VALUES
  );

  if (ariaValue != null) {
    return ariaValue;
  }

  // ...followed by HTML semantics
  const htmlValue = element.getAttribute("autocomplete");
  if (htmlValue == null || VALID_HTML_VALUES.includes(htmlValue)) {
    return htmlValue;
  }

  // Else no value
  return null;
};
