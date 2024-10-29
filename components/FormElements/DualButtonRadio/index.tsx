/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

export interface DualButtonRadioOption {
  value: string;
  label: string;
}

interface DualButtonRadioProps {
  options: DualButtonRadioOption[];
  onChange?: (selectedOption: DualButtonRadioOption) => void;
  selected?: string; // Controlled prop
  defaultSelected?: string; // Uncontrolled initial value prop
}

const DualButtonRadio: React.FC<DualButtonRadioProps> = ({
  options,
  onChange,
  selected,
  defaultSelected
}) => {
  // Determine if the component is controlled or uncontrolled
  const isControlled = selected !== undefined;

  // Use internal state if uncontrolled
  const [internalSelected, setInternalSelected] = useState<string | undefined>(
    defaultSelected
  );

  const currentSelected = isControlled ? selected : internalSelected;

  const handleChange = (option: DualButtonRadioOption) => {
    if (!isControlled) {
      setInternalSelected(option.value); // Update internal state if uncontrolled
    }
    if (onChange) {
      onChange(option); // Call onChange for both controlled and uncontrolled
    }
  };

  return (
    <div className="flex space-x-4">
      {options.map((option) => (
        <label
          key={option.value}
          className={`
            flex-1 px-4 flex items-center justify-center py-2 text-center cursor-pointer transition-colors duration-200
            ${
              currentSelected === option.value
                ? 'bg-primary text-black hover:bg-secondary-blue hover:text-white'
                : 'bg-white text-gray-700 hover:bg-secondary-blue hover:text-white'
            }
            border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50
          `}
        >
          <input
            checked={currentSelected === option.value}
            className="sr-only"
            name="dual-button-radio"
            onChange={() => handleChange(option)}
            type="radio"
            value={option.value}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default DualButtonRadio;
