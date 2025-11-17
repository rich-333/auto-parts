import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Select({ options = [], placeholder = "Selecciona una opción" }) {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="relative w-52 max-w-xs mx-auto">
      <select
        value={selected}
        onChange={handleChange}
        className="w-full appearance-none bg-blue-100 text-gray-700 py-2.5 px-4 pr-10 rounded-lg shadow-sm
        hover:bg-discount hover:text-white focus:outline-4 outline-discount focus:outline-offset-2
        transition duration-100 cursor-pointer"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
}
