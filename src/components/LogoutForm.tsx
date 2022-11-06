const LogoutForm = () => {
  window.localStorage.removeItem("access_token");
  window.location.href = "/login";

  return <div></div>;
};

export default LogoutForm;
