/**
 * Properties for dropdowns by type
 */
const dropdownProps = {
  chevron: {
    defaultClassName: 'chevron chevron--default__closed',
    optionalClassName: 'chevron chevron--default__opened',
  },
  basic: {
    defaultClassName: "dropdown button--basic-right__closed",
    optionalClassName: "dropdown button--basic-right__opened",
    buttonClassName: "dropdown button--basic-right",
  },
  solid: {
    defaultClassName: "dropdown button--solid-right__closed",
    optionalClassName: "dropdown button--solid-right__opened",
    buttonClassName: "dropdown button--solid-right",
  },
  "no-border": {
    defaultClassName: "dropdown button--noBorder-right__closed",
    optionalClassName: "dropdown button--noBorder-right__opened",
    buttonClassName: "dropdown button--noBorder-right",
  },
  "no-border-link": {
    defaultClassName: "dropdown button--noBorderLink-left__closed",
    optionalClassName: "dropdown button--noBorderLink-left__opened",
    buttonClassName: "dropdown button--noBorderLink-left",
  },
  "no-border-purple": {
    defaultClassName: "dropdown button--noBorderPurple-left__closed",
    optionalClassName: "dropdown button--noBorderPurple-left__opened",
    buttonClassName: "dropdown button--noBorderPurple-left",
  },
  "header-no-border-purple": {
    defaultClassName: "dropdown button--header-left__closed",
    optionalClassName: "dropdown button--header-left__opened",
    buttonClassName: "dropdown button--header-left",
  },
  "expandable-no-border-purple": {
    defaultClassName: "expandable list--default__closed",
    optionalClassName: "expandable list--default__opened",
    buttonClassName: "dropdown button--expandable-left",
  },
};

export default dropdownProps;
