import { createContext, useContext } from 'react';
import { useState } from 'react';

const DrawerTogglerContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useDrawerToggler = () => {
  return useContext(DrawerTogglerContext);
};

export const DrawerTogglerProvider = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isRightAnchor, setIsRightAnchor] = useState(false);
  const drawerToggleHandler = (rightAnchor) => {
    setShowDrawer((show) => !show);
    if (rightAnchor) {
      setIsRightAnchor(true);
    } else {
      setIsRightAnchor(false);
    }
  };
  const valueToShare = {
    isRightAnchor,
    showDrawer,
    drawerToggleHandler,
  };
  return (
    <DrawerTogglerContext.Provider value={valueToShare}>
      {children}
    </DrawerTogglerContext.Provider>
  );
};
