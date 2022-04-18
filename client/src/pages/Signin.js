import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../redux/action/user";

function Signin() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
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
        <Link to={"/profile"}>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(signin(user));
            }}
          >
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Signin;
