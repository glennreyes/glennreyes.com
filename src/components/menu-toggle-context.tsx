import React from 'react';

const MenuToggleContext = React.createContext({
  isOpen: false,
  toggleOpen: () => {},
});

type NavMenuToggleProps = {
  children: React.ReactNode;
};

export const MenuToggleProvider = ({ children }: NavMenuToggleProps) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <MenuToggleContext.Provider
      value={{
        isOpen,
        toggleOpen: () => setOpen(isOpen => !isOpen),
      }}
    >
      {children}
    </MenuToggleContext.Provider>
  );
};

export default MenuToggleContext;
