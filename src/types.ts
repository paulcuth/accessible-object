export type Role =
  | "button"
  | "checkbox"
  | "gridcell"
  | "link"
  | "menuitem"
  | "menuitemcheckbox"
  | "menuitemradio"
  | "option"
  | "progressbar"
  | "radio"
  | "scrollbar"
  | "searchbox"
  | "separator"
  | "slider"
  | "spinbutton"
  | "switch"
  | "tab"
  | "tabpanel"
  | "textbox"
  | "treeitem"
  | "combobox"
  | "grid"
  | "listbox"
  | "menu"
  | "menubar"
  | "radiogroup"
  | "tablist"
  | "tree"
  | "treegrid"
  | "application"
  | "article"
  | "cell"
  | "columnheader"
  | "definition"
  | "directory"
  | "document"
  | "feed"
  | "figure"
  | "group"
  | "heading"
  | "img"
  | "list"
  | "listitem"
  | "math"
  | "none"
  | "note"
  | "presentation"
  | "row"
  | "rowgroup"
  | "rowheader"
  | "separator"
  | "table"
  | "term"
  | "textbox"
  | "toolbar"
  | "tooltip"
  | "banner"
  | "complementary"
  | "contentinfo"
  | "form"
  | "main"
  | "navigation"
  | "region"
  | "search"
  | "alert"
  | "log"
  | "marquee"
  | "status"
  | "timer"
  | "alertdialog"
  | "dialog";

export type AccessibleObject = {
  role: Role | null;
  name?: string;
  description?: string;

  activeDescendant?: Element;
  atomic?: true;
  autoComplete?: string;
  busy?: true;
  checked?: boolean | "mixed";
  colCount?: number;
  colIndex?: number;
  colSpan?: number;
  controls?: Array<Element>;
  current?: true | "page" | "step" | "location" | "date" | "time";
  describedBy?: Array<Element>;
  details?: Element;
  errorMessage?: Element;
  expanded?: boolean;
  flowTo?: Array<Element>;
  focusable?: boolean;
  focused?: boolean;
  hasPopup?: "menu" | "listbox" | "tree" | "grid" | "dialog";
  hidden?: true;
  invalid?: true | "spelling" | "grammar";
  keyShortcuts?: Array<string>;
  label?: string;
  labelledBy?: Array<Element>;
  level?: number;
  live?: "polite" | "assertive";
  modal?: true;
  multiLine?: true;
  multiSelectable?: true;
  orientation?: "horizontal" | "vertical";
  owns?: Array<Element>;
  placeholder?: string;
  posInSet?: number;
  pressed?: boolean | "mixed";
  readOnly?: boolean;
  relevant?: Array<"additions" | "removals" | "text">;
  required?: boolean;
  roleDescription?: string;
  rowCount?: number;
  rowIndex?: number;
  rowSpan?: number;
  selected?: boolean;
  setSize?: number;
  sort?: "ascending" | "descending" | "other" | "none";

  value?: string;
  invalidUserEntry?: boolean;
};
