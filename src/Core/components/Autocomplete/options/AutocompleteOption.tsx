import React from "react";
import _ from "lodash";
import { Option } from "@/Core/common-dto/Option";

interface OptionProps {
  option: Option;
  selected: Option | null;
  onClick: (option: Option) => void;
  optionRef: React.RefObject<HTMLLIElement>;
}

function AOption({ option, selected, optionRef, onClick }: OptionProps) {
  return (
    <li
      onClick={() => onClick(option)}
      className={_.isEqual(selected, option) ? "selected" : ""}
      ref={_.isEqual(selected, option) ? optionRef : null}
    >
      {option.label}
    </li>
  );
}

export const AutocompleteOption = React.memo(AOption);
