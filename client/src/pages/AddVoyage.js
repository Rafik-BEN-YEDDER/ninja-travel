import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addvoyage, } from "../redux/action/voyage";

function AddVoyage() {
  const [voyagee, setVoyagee] = useState();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const confirm = () => {
    setShow(false);
    dispatch(addvoyage( voyagee ));
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setVoyagee({ ...voyagee, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Voyage
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Voyage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Depart</Form.Label>
            <Form.Control
              name="depart"
              onChange={handleChange}
            />
            <Form.Label>Arrivée</Form.Label>
            <Form.Control
              name="arrivee"
              onChange={handleChange}
            />
            <Form.Label>Heure</Form.Label>
            <Form.Control
              name="heure"
              onChange={handleChange}
            />
            <Form.Label>Date</Form.Label>
            <Form.Control
              name="date"
              onChange={handleChange}
            />
            <Form.Label>Prix</Form.Label>
            <Form.Control
              name="prix"
              onChange={handleChange}
            />
            <Form.Label>Distance</Form.Label>
            <Form.Control
              name="distance"

              onChange={handleChange}
            />
            <Form.Label>Places</Form.Label>
            <Form.Control
              name="places"
              onChange={handleChange}
            />
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

export default AddVoyage;
