import React, { useEffect, useContext } from "react";
import { axiosRequests } from "./services/axoisRequests";
import { MainContext } from "./resources/StoreProvider";
import { logout } from "./services/logout";

function App() {
  const { user, setUser } = useContext(MainContext);

  useEffect(() => {
    (async () => {
      let [index, response] = await axiosRequests("get", "/auth/user");
      index ? setUser(response.user) : logout();
    })();
  }, []);
  return (
    <div className="container">
      <h2 className="text-center">Wellcome {user?.name} to our boilerplate</h2>
    </div>
  );
}

export default App;
