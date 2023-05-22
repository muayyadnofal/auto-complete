import { useEffect } from "react";

export const useDropdownPosition = (
  autocompleteRef: React.RefObject<HTMLDivElement>,
  dropdownRef: React.RefObject<HTMLUListElement>,
  isFocused: boolean,
  loading?: boolean
) => {
  const calculateDropdownPosition = () => {
    const inputRect = autocompleteRef.current?.getBoundingClientRect();
    const dropdownHeight = dropdownRef.current?.clientHeight || 0;
    const windowHeight = innerHeight || document.documentElement.clientHeight;
    const bottomSpace = windowHeight - (inputRect?.bottom || 0);
    if (inputRect && bottomSpace <= dropdownHeight - 10) {
      dropdownRef.current?.classList.add("open-up");
    } else {
      dropdownRef.current?.classList.remove("open-up");
    }
  };

  useEffect(() => {
    setTimeout(() => calculateDropdownPosition(), 10);
  }, [isFocused, loading]);

  useEffect(() => {
    calculateDropdownPosition();
    addEventListener("resize", calculateDropdownPosition);

    return () => {
      removeEventListener("resize", calculateDropdownPosition);
    };
  }, []);
};
