import { createContext, useState, useContext } from "react";
//======================================================

interface GlobalContent {
  isMenuOpen: boolean;
  menuHandler: () => void;
}

export const UiContext = createContext<GlobalContent>({
  isMenuOpen: false,
  menuHandler: Function,
});

interface Props {
  children: React.ReactNode;
}

export function UiProvider({ children }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function menuHandler() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <UiContext.Provider value={{ isMenuOpen, menuHandler }}>
      {children}
    </UiContext.Provider>
  );
}

export const useUiContext = () => useContext(UiContext);
