export const checkIfLoggedIn = () => {
  const tokenKey =
    sessionStorage.getItem("token") != null
      ? sessionStorage.getItem("token")
      : "";
  return tokenKey ? tokenKey : false;
};
