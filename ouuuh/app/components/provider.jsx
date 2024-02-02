import React, { createContext, useContext, useState } from 'react';

export const SelectedKeysContext = createContext();

export const SelectedKeysProvider = ({ children }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));

  return (
    <SelectedKeysContext.Provider value={selectedKeys}>
      {children}
    </SelectedKeysContext.Provider>
  );
};