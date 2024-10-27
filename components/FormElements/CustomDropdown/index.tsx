import React, { useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  placeholder?: string;
  onChange?: (selectedOption: Option) => void;
  value?: string; // Controlled prop
  defaultValue?: string; // Uncontrolled initial value prop
}

const ChevronIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  placeholder = 'Select option',
  onChange,
  value,
  defaultValue
}) => {
  // Determine if the component is controlled or uncontrolled
  const isControlled = value !== undefined;

  // Use internal state if uncontrolled
  const [internalValue, setInternalValue] = useState<string | undefined>(
    defaultValue
  );

  const selectedValue = isControlled ? value : internalValue;
  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelectOption = (option: Option) => {
    if (!isControlled) {
      setInternalValue(option.value); // Update internal state if uncontrolled
    }
    setIsOpen(false);
    if (onChange) {
      onChange(option); // Call onChange for both controlled and uncontrolled
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        aria-controls="select-dropdown"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="flex items-center justify-between w-full py-3 pl-5 pr-4 text-gray-700 bg-white border rounded-md outline-none cursor-pointer hover:border-blue-500 focus:outline-2 focus:outline-blue-500"
        id="select-dropdown-btn"
        onClick={toggleDropdown}
        role="combobox"
        type="button"
      >
        <span className="selected-value">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronIcon
          className={`w-4 h-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <ul
          className="absolute left-0 z-10 w-full mt-1 bg-white border rounded-md shadow-lg"
          id="select-dropdown"
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              aria-selected={selectedValue === option.value}
              className="relative w-full text-black transition-colors duration-100 hover:bg-blue-500 hover:text-white"
              role="option"
            >
              <button
                className="w-full px-4 py-2 text-left"
                onClick={() => handleSelectOption(option)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
