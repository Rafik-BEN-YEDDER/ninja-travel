import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "../redux/action/user";
import DeleteUser from "./DeleteUser";
function ListeUser() {
  const load = useSelector((state) => state.userReducer.load);
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);
  const Users = useSelector((state) => state.userReducer.users);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
      Users
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Users List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="main-content">
            <div className="container">
              <h1>Liste of users</h1>
              <br />
              <br />
              <table class="table">
                <thead>
                  <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone</th>
                    <th>Email</th>
                  </tr>
                </thead>
                {load ? (
                  <p>loading</p>
                ):(
                    Users.map((el) => (
                    <tbody>
                      <tr>
                        <td>
                          <h6 className="mb-0">{el.firstname}</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">{el.lastname}</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">{el.phone}</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">{el.email}</h6>
                        </td>
                        <td>
                            <DeleteUser user={el}/>
                        </td>
                      </tr>
                    </tbody>
                  ))
                )}
              </table>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ListeUser;
