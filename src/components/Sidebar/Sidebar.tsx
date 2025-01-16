import React from "react";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string; 
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="sidebar-backdrop" onClick={onClose}>
      <div
        className="sidebar"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sidebar-header">
          {title && <h2 className="sidebar-title">{title}</h2>}
        </div>
        <div className="sidebar-content">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
