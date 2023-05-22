import React from "react";
import CustomInput from "./input";
import useAutocomplete from "@/Core/hooks/useAutocomplete";
import "./index.style.css";
import AutocompleteOptions from "./options";
import { Option } from "@/Core/common-dto/Option";

interface AutocompleteProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  options: Option[];
  loading?: boolean;
  onInit?: () => void;
  onClose?: () => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  loading,
  onInit,
  onClose,
  ...rest
}) => {
  const {
    inputValue,
    selected,
    isFocused,
    filteredOptions,
    autocompleteRef,
    dropdownRef,
    selectedOptionRef,
    handleInputChange,
    handleClearInput,
    handleInputFocus,
    handleOptionClick,
  } = useAutocomplete({ options, loading, onInit, onClose });

  return (
    <div className="autocomplete" ref={autocompleteRef}>
      <CustomInput
        value={selected ? selected.label : inputValue}
        onChange={handleInputChange}
        onClear={handleClearInput}
        onFocus={handleInputFocus}
        loading={isFocused && loading}
        placeholder="search & select ..."
        {...rest}
      />
      {isFocused && (
        <AutocompleteOptions
          options={filteredOptions}
          loading={loading}
          selected={selected}
          handleOptionClick={handleOptionClick}
          selectedOptionRef={selectedOptionRef}
          dropdownRef={dropdownRef}
        />
      )}
    </div>
  );
};

export default Autocomplete;
