import React from "react";
import { AutocompleteOption } from "./AutocompleteOption";
import { Option } from "@/Core/common-dto/Option";

interface AutocompleteOptionsProps {
  options: Option[];
  loading?: boolean;
  selected: Option | null;
  handleOptionClick: (option: Option) => void;
  selectedOptionRef: React.RefObject<HTMLLIElement>;
  dropdownRef: React.RefObject<HTMLUListElement>;
}

function AutocompleteOptions({
  options,
  loading,
  selected,
  handleOptionClick,
  dropdownRef,
  selectedOptionRef,
}: AutocompleteOptionsProps) {
  return (
    <ul className="autocomplete-options" ref={dropdownRef}>
      {loading ? (
        <li className="loading-text">Loading...</li>
      ) : options.length > 0 ? (
        options.map((option, index) => (
          <AutocompleteOption
            key={index}
            onClick={() => handleOptionClick(option)}
            selected={selected}
            option={option}
            optionRef={selectedOptionRef}
          />
        ))
      ) : (
        <li className="no-matches">No matches found.</li>
      )}
    </ul>
  );
}

export default AutocompleteOptions;
