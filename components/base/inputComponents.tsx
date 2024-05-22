// Import necessary modules
"use client"
import React, { ChangeEvent, useState } from 'react';

// Define the InputComponentProps interface
interface InputComponentProps {
  label: string;
  name: string;
  placeholder: string;
}

// Define the InputComponent functional component
export const InputComponent: React.FC<InputComponentProps> = ({ label, name, placeholder }) => {
  // State to manage the input value
  const [inputValue, setInputValue] = useState<string>('');

  // Event handler for input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <label>
      <div className="pb-6">
        <label htmlFor={name} className="block text-foreground font-helvetica text-sm font-medium leading-6">
          {label}
        </label>
        <div className="mt-2">
          <input
            type="text"
            name={name}
            id={name}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleInputChange}
            className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070] focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"
          />
        </div>
      </div>
    </label>
  );
};


