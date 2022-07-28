import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { MainLayout } from "../components/Layout/MainLayout";
import { toast } from "react-toastify";
import { loginUser } from "../helpers/axiosHelper";

export const Login = ({ setLoggedIn }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const { status, message, user } = await loginUser({ email, password });
    toast[status](message);

    if (status === "success") {
      console.log(user);
      window.sessionStorage.setItem("user", JSON.stringify(user));
      setLoggedIn(true);
      navigate("/dashboard");
    }
  };

  return (
    <MainLayout>
      <div className="login-page d-flex justify-content-center mt-5">
        <div className="login-form border p-5 shadow p-3 m-5 bg-body rounded">
          <h3 className="text-center mb-3">Welcome</h3>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </Form.Group>

            <Button variant="primary" type="submit ">
              Login
            </Button>
          </Form>
          <div className="mt-5 text-end">
            New here? <Link to="/registration">Registration</Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
