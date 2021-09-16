import React, { useState, createContext } from "react";

export const MainContext = createContext();

const StoreProvider = (props) => {
  const [user, setUser] = useState(null);
  return (
    <React.Fragment>
      <MainContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {props.children}
      </MainContext.Provider>
    </React.Fragment>
  );
};
export default StoreProvider;
