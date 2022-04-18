import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteuser } from "../redux/action/user";


function DeleteUser({user}) {
    const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const confirm = () => {
    setShow(false);
    dispatch(deleteuser( user ));
  };

  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Delete
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete!!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you really want to delete,</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>confirm()}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default DeleteUser