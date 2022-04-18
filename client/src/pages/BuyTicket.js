import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, } from "react-redux";
import { useMatch } from "react-router-dom";
import { editvoyage } from "../redux/action/voyage";

function BuyTicket({ voyage }) {
  const match=useMatch("/editvoyage/:id")
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const confirm = () => {
    setShow(false);
    dispatch(editvoyage({ ...voyage, places: voyage.places - 1 }));
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Buy Ticket
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please confirm the purchase</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              confirm();
            }}
          >
            confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BuyTicket;
