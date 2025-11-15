import { Upload } from 'lucide-react';
import React, { useState, useRef } from 'react';

export function InputMainImage() {
  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);

  const mainImageInputRef = useRef(null);

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImage(file);
      setMainImagePreview(URL.createObjectURL(file));
    } else {
      setMainImage(null);
      setMainImagePreview(null);
    }
  };
  
  return(
    <div className="w-full md:w-1/2 px-3 mb-6">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Imagen Principal
      </label>
      <div 
        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-indigo-500 transition-colors"
        onClick={() => mainImageInputRef.current.click()}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleMainImageChange}
          className="hidden"
          ref={mainImageInputRef}
        />
        {mainImagePreview ? (
          <img src={mainImagePreview} alt="Previsualización Principal" className="max-h-32 w-auto object-contain rounded-md mb-2" />
        ) : (
          <Upload className="w-10 h-10 text-gray-400 mb-2" />
        )}
        <p className="text-sm text-gray-600 text-center">
          {mainImage ? mainImage.name : "Click para seleccionar la imagen principal"}
        </p>
        <p className="text-xs text-gray-500 mt-1">Sube la mejor foto de la categoria.</p>
      </div>
    </div>
  )
}