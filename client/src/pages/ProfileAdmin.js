import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import AddVoyage from "./AddVoyage";
import "./css/style.css";
import ListeUser from "./ListeUser";
import ListeVoyage from "./ListeVoyage";

function ProfileAdmin() {
  const load = useSelector((state) => state.adminReducer.load);
  const isAuth = useSelector((state) => state.adminReducer.isAuth);
  const admin = useSelector((state) => state.adminReducer.admin);
  return (
    <div>
      {load ? (
        <p>loading</p>
      ) : isAuth ? (
        <div>
          <body>
            <section className="py-5 my-5">
              <div className="container">
                <h1 className="mb-5">Account Settings</h1>
                <div className="bg-white shadow rounded-lg d-block d-sm-flex">
                  <div
                    className="tab-content p-4 p-md-5"
                    id="v-pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="account"
                      role="tabpanel"
                      aria-labelledby="account-tab"
                    >
                      <h3 className="mb-4">Account Settings</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              type="text"
                              class="form-control"
                              value={admin.name}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              type="text"
                              className="form-control"
                              value={admin.email}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <Link to={"/ListeUser"}>
                          <Button
                            variant="outline-secondary"
                            type="submit"
                            style={{ margin: 3 }}
                          >
                            Users list
                          </Button>
                        </Link>
                        <AddVoyage />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </body>
        </div>
      ) : (
        <div>
          {alert("please check your email or password")}
          <Navigate to="/signinAdmin" />
        </div>
      )}
    </div>
  );
}

export default ProfileAdmin;
