import React, { useRef, useState, useEffect } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="flex justify-center mb-6">
      {/* Hidden file input */}
      <input
        type="file"
        accept=".jpeg, .jpg, .png"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Profile box */}
      <div className="relative w-20 h-20 cursor-pointer group">
        {previewUrl ? (
          <>
            <img
              src={previewUrl}
              alt="Profile Preview"
              className="w-20 h-20 rounded-full object-cover border border-primary"
              onClick={onChooseFile}
            />
            <button
              type="button"
              className="w-7 h-7 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1 transition duration-200"
              onClick={handleRemoveImage}
            >
              <LuTrash size={16} />
            </button>
          </>
        ) : (
          <>
            <div
              onClick={onChooseFile}
              className="w-20 h-20 flex items-center justify-center bg-blue-100/50 rounded-full text-4xl text-primary"
            >
              <LuUser />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full absolute -bottom-1 -right-1">
              <LuUpload size={16} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePhotoSelector;
