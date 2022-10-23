const LogoutForm = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("code");
  window.location.href = "/login";
  return <div></div>;
};

export default LogoutForm;
