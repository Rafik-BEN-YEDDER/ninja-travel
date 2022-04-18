import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signupAdmin } from "../redux/action/admin";

function SignupAdmin() {
  const [newAdmin, setNewAdmin] = useState();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="name"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Email"
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
            type="submit"
            onClick={() => {
              dispatch(signupAdmin(newAdmin));
            }}
          >
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default SignupAdmin;
