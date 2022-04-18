import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {logOut} from "../redux/action/admin"

function Navigation() {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.adminReducer.isAuth);
  
  return (
    <header>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
        <Link to={"/"}>
              <Button variant="outline-secondary" type="submit" style={{margin:3 }}>
                Home
              </Button>
            </Link>
          
{isAuth?

<Container style={{display:"flex",justifyContent:"flex-end" }}>
            <Link to={"/"}>
              <Button variant="outline-secondary" type="submit" onClick={()=> dispatch(logOut())}>
                Logout
              </Button>
            </Link>
          </Container>
:
          <Container style={{display:"flex",justifyContent:"flex-end"}}>
            <Link to={"/signin"}>
              <Button variant="outline-secondary" type="submit" style={{margin:3 }} >
                Signin
              </Button>
            </Link>
            <Link to={"/signup"}>
              <Button variant="outline-secondary" type="submit" style={{margin:3 }}>
                Signup
              </Button>
            </Link>
            <Link to={"/signinAdmin"}>
              <Button variant="outline-secondary" type="submit" style={{margin:3 }} >
              Admin Signin
              </Button>
            </Link>
            <Link to={"/signupAdmin"}>
              <Button variant="outline-secondary" type="submit" style={{margin:3 }}>
              Admin Signup
              </Button>
            </Link>
          </Container>
}
        </Navbar>
      </Container>
    </header>
  );
}

export default Navigation;
