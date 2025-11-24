import { Search, X } from "lucide-react";

export function SearchBar({ placeholder = "Buscar...", value, onChange }) {

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className="flex items-center max-w-md mx-auto bg-gray-200 rounded-full shadow-md overflow-hidden hover:bg-gray-100 transition duration-200">
      <div className="pl-3">
        <Search className="text-gray-400 w-5 h-5" />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-3 py-2 text-gray-700 placeholder-gray-500/80 focus:outline-none rounded-l-full w-full"
      />

      {value && (
        <button
          onClick={handleClear}
          className="pr-3 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}