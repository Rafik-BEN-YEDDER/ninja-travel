import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edituser } from "../redux/action/user";

function EditUser({ user }) {
  const [userr, setUserr] = useState(user);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const confirm = () => {
    setShow(false);
    dispatch(edituser(userr));
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setUserr({ ...userr, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder={user.firstname}
                name="firstname"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder={user.lastname}
                name="lastname"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder={user.email}
                name="email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                placeholder={user.phone}
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              confirm();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditUser;
