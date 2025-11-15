export function InputGroup({ label, name, icon: Icon, onChangeInput, formData = 'ochi' }) {
  
  return(
    <div className="w-full px-3 mb-6">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <div className="flex items-center border border-gray-200 rounded-lg shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        {Icon && <Icon className="w-5 h-5 text-gray-400 ml-3" />}
        <input
          className="appearance-none block w-full bg-white text-gray-700 border-none py-3 px-4 leading-tight focus:outline-none"
          id={name}
          name={name}
          type="text"
          value={formData[name]}
          onChange={onChangeInput}
          placeholder={label}
        />
      </div>
    </div>
  )
}