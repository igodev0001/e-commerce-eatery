import { createContext, useState, useContext } from "react";
//======================================================

interface GlobalContent {
  isMenuOpen: boolean;
  menuHandler: () => void;
  closeMenu: () => void;
}

export const UiContext = createContext<GlobalContent>({
  isMenuOpen: false,
  menuHandler: Function,
  closeMenu: Function,
});

interface Props {
  children: React.ReactNode;
}

export function UiProvider({ children }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function menuHandler() {
    setIsMenuOpen(!isMenuOpen);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <UiContext.Provider value={{ isMenuOpen, menuHandler, closeMenu }}>
      {children}
    </UiContext.Provider>
  );
}

export const useUiContext = () => useContext(UiContext);
