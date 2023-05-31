import React, { createContext, useState } from "react";

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
  const [saveData,setSaveData] = useState({ username: "", name: "" });
  return (
    <DataContext.Provider value={{ saveData,setSaveData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
