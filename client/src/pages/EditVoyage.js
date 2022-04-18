import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editvoyage } from "../redux/action/voyage";

function EditVoyage({ voyage }) {
  const [voyagee, setVoyagee] = useState(voyage);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const confirm = () => {
    setShow(false);
    dispatch(editvoyage(voyagee));
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setVoyagee({ ...voyagee, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Voyage
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Voyage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Depart</Form.Label>
            <Form.Control
              name="deprt"
              placeholder={voyage.depart}
              onChange={handleChange}
            />
            <Form.Label>Arrivée</Form.Label>
            <Form.Control
              name="arrivee"
              placeholder={voyage.arrivee}
              onChange={handleChange}
            />
            <Form.Label>Heure</Form.Label>
            <Form.Control
              name="heure"
              placeholder={voyage.heure}
              onChange={handleChange}
            />
            <Form.Label>Date</Form.Label>
            <Form.Control
              name="date"
              placeholder={voyage.date}
              onChange={handleChange}
            />
            <Form.Label>Prix</Form.Label>
            <Form.Control
              name="prix"
              placeholder={voyage.prix}
              onChange={handleChange}
            />
            <Form.Label>Distance</Form.Label>
            <Form.Control
              name="distance"
              placeholder={voyage.distance}
              onChange={handleChange}
            />
            <Form.Label>Places</Form.Label>
            <Form.Control
              name="places"
              placeholder={voyage.places}
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

export default EditVoyage;
