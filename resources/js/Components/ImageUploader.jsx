import { useState } from "react";
import { forwardRef, useEffect, useRef } from 'react';

export default function ImageUploader({setImages,images, className, label, handleChange, value, defaultValue, isFocused}) {
    const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const input = useRef();

  useEffect(() => {
    if (isFocused) {
        input.current.focus();
    }
}, []);

  return (
    <div>
    <h1>{label}</h1>
      <input 
        type="file" 
        className="" accept="image/*" 
        onChange={(e) => {handleChange(e);handleImageChange(e)}}
        value={value}
        defaultValue={defaultValue}
        ref={input}
        
    />
      {selectedImage && (
        <img src={selectedImage} alt="Selected" className={className} />
        
      )}
    </div>
  )
}