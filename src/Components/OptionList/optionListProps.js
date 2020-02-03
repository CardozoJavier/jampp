import { OptionContainer } from "./styles";
import { UniqueOption } from "../UniqueOption";
import { StatusLabelOption } from "../StatusLabelOption";

/**
 * Properties for option list by type
 */
const optionListProps = {
  "unique-option": {
    defaultClassName: "unique option--default",
    optionalClassName: "",
    OptionContainer: OptionContainer,
    OptionItem: UniqueOption,
    iconClassName: '',
    iconProps: {},
  },
  "status-label": {
    defaultClassName: "unique option--default",
    optionalClassName: "",
    OptionContainer: OptionContainer,
    OptionItem: StatusLabelOption,
    iconClassName: '',
    iconProps: {},
  },
  "expandable-unique-option": {
    defaultClassName: "expandable unique--default",
    optionalClassName: "",
    OptionContainer: OptionContainer,
    OptionItem: UniqueOption,
    iconClassName: '',
    iconProps: {},
  },
  "header-unique-option": {
    defaultClassName: "unique option--header",
    optionalClassName: "",
    OptionContainer: OptionContainer,
    OptionItem: UniqueOption,
    iconClassName: '',
    iconProps: {},
  },
  "status-option": {
    defaultClassName: "status option--default",
    optionalClassName: "",
    OptionContainer: OptionContainer,
    OptionItem: UniqueOption,
    iconClassName: '',
    iconProps: {},
  },
};

export default optionListProps;
