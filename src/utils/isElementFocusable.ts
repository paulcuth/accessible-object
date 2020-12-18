import getIntegerAttributeValue from "./getIntegerAttributeValue";
import getBooleanHtmlAttributeValue from "./getBooleanHtmlAttributeValue";

export default (element: Element): boolean => {
  switch (element.tagName) {
    case "A":
    case "AREA":
      const href = element.getAttribute("href");
      if (href != null && href !== "") return true;
      break;

    case "INPUT":
    case "SELECT":
    case "TEXTAREA":
    case "BUTTON":
      return !(element as HTMLInputElement).disabled;

    case "IFRAME":
      return true;
  }

  const isContentEditable =
    getBooleanHtmlAttributeValue(element, "contenteditable") ?? false;
  if (isContentEditable) {
    return true;
  }

  const tabIndex = getIntegerAttributeValue(element, "tabindex");
  return tabIndex != null;
};
