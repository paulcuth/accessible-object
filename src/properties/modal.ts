import mapBooleanAriaAttribute from "../utils/mapBooleanAriaAttribute";

const VALID_ROLES = ["window", "dialog", "alertdialog"];

export const name = "modal";

export const resolver = mapBooleanAriaAttribute("aria-modal", {
  roles: VALID_ROLES,
});
