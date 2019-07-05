import React from 'react';

const MenuToggleContext = React.createContext({
  close: () => {},
  isOpen: false,
  toggle: () => {},
});

type NavMenuToggleProps = {
  children: React.ReactNode;
};

export const MenuToggleProvider = ({ children }: NavMenuToggleProps) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <MenuToggleContext.Provider
      value={{
        close: () => setOpen(false),
        isOpen,
        toggle: () => setOpen(isOpen => !isOpen),
      }}
    >
      {children}
    </MenuToggleContext.Provider>
  );
};

export default MenuToggleContext;
