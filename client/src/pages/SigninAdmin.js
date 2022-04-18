import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signinAdmin } from "../redux/action/admin";

function SigninAdmin() {
  const [admin, setAdmin] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Link to={"/profileAdmin"}>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(signinAdmin(admin));
            }}
          >
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default SigninAdmin;
