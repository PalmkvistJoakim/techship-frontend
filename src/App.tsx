import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import LogoutForm from "./components/LogoutForm";
import Navbar from "./components/Navbar";
import MailForm from "./components/MailForm";

function App() {
  const token = localStorage.getItem("access_token");
  console.log("token", token);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mail" element={<MailForm />} />
        <Route path="/logout" element={<LogoutForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={!token ? <LoginForm /> : <Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
