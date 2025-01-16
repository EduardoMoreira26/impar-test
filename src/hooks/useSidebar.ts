import { useState } from "react";

interface UseSideBarReturn {
  isSidebarOpen: boolean;
  openSidebar: (content: string) => void;
  closeSidebar: () => void;
}

export const useSideBar = (): UseSideBarReturn => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
  };
};
