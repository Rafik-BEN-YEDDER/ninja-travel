import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./css/style.css";
import EditUser from "./EditUser";

function Profile() {
  const load = useSelector((state) => state.userReducer.load);
  const isAuthUser = useSelector((state) => state.userReducer.isAuthUser);
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div>
      {load ? (
        <p>loading</p>
      ) : isAuthUser ? (
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
                            <label>First Name</label>
                            <input
                              type="text"
                              class="form-control"
                              value={user.firstname}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value={user.lastname}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              type="text"
                              className="form-control"
                              value={user.email}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone number</label>
                            <input
                              type="text"
                              className="form-control"
                              value={user.phone}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Bio</label>
                            <textarea className="form-control" rows="4">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Labore vero enim error similique quia
                              numquam ullam corporis officia odio repellendus
                              aperiam consequatur laudantium porro voluptatibus,
                              itaque laboriosam veritatis voluptatum distinctio!
                            </textarea>
                          </div>
                        </div>
                      </div>
                      <div>
                        <EditUser user={user}/>
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
          <Navigate to="/signin" />
        </div>
      )}
    </div>
  );
}

export default Profile;
