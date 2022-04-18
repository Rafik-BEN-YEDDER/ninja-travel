import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../redux/action/user";

function Signup() {
  const [newUser, setNewUser] = useState();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            placeholder="First Name"
            name="firstname"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            placeholder="Last Name"
            name="lastname"
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
          <Form.Label>Phone</Form.Label>
          <Form.Control
            placeholder="Phone"
            name="phone"
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
            type="submit"
            onClick={() => {
              dispatch(signup(newUser));
            }}
          >
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Signup;
