import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "./useClickOutside";
import { Option } from "@/Core/common-dto/Option";
import { useDropdownPosition } from "./useDropdownPosition";

interface UseAutocompleteProps {
  options: Option[];
  loading?: boolean;
  onInit?: () => void;
  onClose?: () => void;
}

interface UseAutocompleteReturn {
  inputValue: string;
  selected: Option | null;
  isFocused: boolean;
  filteredOptions: Option[];
  autocompleteRef: React.RefObject<HTMLDivElement>;
  dropdownRef: React.RefObject<HTMLUListElement>;
  selectedOptionRef: React.RefObject<HTMLLIElement>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearInput: () => void;
  handleInputFocus: () => void;
  handleOptionClick: (option: Option) => void;
}

const useAutocomplete = ({
  options,
  loading,
  onInit,
  onClose,
}: UseAutocompleteProps): UseAutocompleteReturn => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState<Option | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
  const autocompleteRef = useRef<HTMLDivElement>(null);
  const selectedOptionRef = useRef<HTMLLIElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(null);
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
    setSelected(null);
    setIsFocused(true);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    onInit && onInit();
  };

  const handleOptionClick = (option: Option) => {
    setInputValue(option.label);
    setSelected(option);
    setIsFocused(false);
  };

  const closeDropdown = () => {
    if (!selected) {
      setInputValue("");
    }
    setIsFocused(false);
    onClose && onClose();
  };

  useClickOutside(autocompleteRef, closeDropdown);
  useDropdownPosition(autocompleteRef, dropdownRef, isFocused, loading);

  useEffect(() => {
    const newOptions = options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(selected ? options : newOptions);
  }, [selected, inputValue, options]);

  useEffect(() => {
    if (selectedOptionRef.current && dropdownRef.current) {
      dropdownRef.current.scrollTop = selectedOptionRef.current.offsetTop;
    }
  }, [isFocused, selectedOptionRef, loading]);

  useEffect(() => {
    const newOptions = options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(selected ? options : newOptions);
  }, [selected, inputValue, options]);

  return {
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
  };
};

export default useAutocomplete;
