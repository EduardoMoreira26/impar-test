import React, { useState } from "react";
import "./FileInput.css";
import Button from "../Button/Button";
import { truncateFileName } from "../../utils/formatString";

interface FileInputFieldProps {
  label?: string;
  onImageChange: (image: File | null) => void;
}

const FileInputField: React.FC<FileInputFieldProps> = ({ label, onImageChange }) => {
  const [fileName, setFileName] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImagePreview(reader.result as string);
          onImageChange(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setFileName("");
    setImagePreview(null);
    onImageChange(null);
  };

  return (
    <div className="input-field">
      {label && <label className="input-label">{label}</label>}
      <div className="file-input">
        <span>{fileName ? truncateFileName(fileName, 20) : "Nenhum arquivo selecionado"}</span>
        {imagePreview && (
          <div className="image-preview">
            <img
              src={imagePreview}
              alt="Preview"
              className="preview-image"
            />
          </div>
        )}
        <Button
          className="file-input-button"
          variant="outlined"
          type="button"
          text={fileName ? "Remover arquivo" : "Escolher arquivo"}
          onClick={fileName ? handleRemoveFile : () => document.getElementById("file-input")?.click()}
        />
        <input
          type="file"
          id="file-input"
          className="file-input-hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default FileInputField;
