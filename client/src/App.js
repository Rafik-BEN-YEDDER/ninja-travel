import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Error from "./pages/Error";
import LandPage from "./pages/LandPage";
import ListeUser from "./pages/ListeUser";
import Profile from "./pages/Profile";
import ProfileAdmin from "./pages/ProfileAdmin";
import Signin from "./pages/Signin";
import SigninAdmin from "./pages/SigninAdmin";
import Signup from "./pages/Signup";
import SignupAdmin from "./pages/SignupAdmin";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Navigation />
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route
          path="/profileAdmin"
          element={
            <AdminRoutes>
              <ProfileAdmin />
            </AdminRoutes>
          }/>
          <Route path="/ListeUser" element={<ListeUser />} />
      
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signinAdmin" element={<SigninAdmin />} />
        <Route path="/signupAdmin" element={<SignupAdmin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
