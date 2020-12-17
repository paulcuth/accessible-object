import mapBooleanAriaAttribute from "../utils/mapBooleanAriaAttribute";

const VALID_ROLES = ["textbox", "searchbox"];

export const name = "multiLine";

export const resolver = mapBooleanAriaAttribute("aria-multiline", {
  roles: VALID_ROLES,
});
