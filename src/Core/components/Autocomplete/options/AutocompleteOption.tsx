import React from "react";
import { Option } from "@/Core/common-dto/Option";

interface OptionProps {
  option: Option;
  selected: Option | null;
  onClick: (option: Option) => void;
  optionRef: React.RefObject<HTMLLIElement>;
}

function AOption({ option, selected, optionRef, onClick }: OptionProps) {
  const isEqual = JSON.stringify(selected) === JSON.stringify(option);

  return (
    <li
      onClick={() => onClick(option)}
      className={isEqual ? "selected" : ""}
      ref={isEqual ? optionRef : null}
    >
      {option.label}
    </li>
  );
}

export const AutocompleteOption = React.memo(AOption);
