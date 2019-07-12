import React from "react";
const ActiveKeysContext = React.createContext({
  activeShortcuts: [],
  updateActiveShortcut: () => {},
  removeActiveShortcut: () => {}
});

export default ActiveKeysContext;
