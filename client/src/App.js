import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [userForm, setUserForm] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const addUser = (registerForm) => {
    setUserForm([...userForm, registerForm]);
  };

  // const emailRef=useRef();
  // const passwordRef=useRef();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route
            path="/registration"
            element={<Registration addUser={addUser} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard isLoggedIn={isLoggedIn} />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
