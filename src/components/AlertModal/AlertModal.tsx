import React from "react";
import "./AlertModal.css";
import IconTrash from "../../../assets/images/Icon-trash.png";

interface AlertModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onCancel} aria-label="Fechar">
          &times;
        </button>
        <div className="modal-icon">
          <img
            src={IconTrash}
            alt="Ícone de lixeira"
          />
        </div>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
        </div>
        <div className="modal-body">
          <strong className="modal-message">{message}</strong>
        </div>
        <div className="divider" />
        <div className="modal-footer">
          <button onClick={onConfirm} className="btn btn-primary ">
            Excluir
          </button>
          <button onClick={onCancel} className="btn btn-secondary ">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
