const LogoutForm = () => {
  window.localStorage.removeItem("access_token");
  window.location.replace("/login");
  return <div></div>;
};

export default LogoutForm;
