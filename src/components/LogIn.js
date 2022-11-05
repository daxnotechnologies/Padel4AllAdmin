import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import "./css/styles.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";
// import Home from "./Home.png";
import logo from "./logo.png";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "./AuthContext";

// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [User, setUser] = useState({});
  const navigate = useNavigate();

  /* onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser);
 });*/
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);
  const login = async () => {
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    )
      .then((res) => {
        console.log("resss", res);
        navigate("/Dashboard");
        console.log("resss", User);
      })
      .catch((err) => {
        console.log("eroors", err);
      });
  };

  return (
    <div
      className=" d-flex justify-content-center "
      style={{ backgroundColor: "#007DED" }}
    >
      <div className="align-items-center" style={{ width: 600, padding: 60 }}>
        <Card style={{ padding: 40 }}>
          <div className="d-flex justify-content-center">
            <img src={logo} width="250px" style={{ marginBottom: 25 }} />
          </div>

          <TextField
            style={{ backgroundColor: "#fff", borderRadius: 15, marginTop: 20 }}
            className="my-4"
            fullWidth
            id="outlined-basic"
            label="Email"
            value={loginEmail}
            variant="outlined"
            onChange={(e) => setLoginEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            style={{
              backgroundColor: "#fff",
              borderRadius: 15,
              marginBottom: 20,
            }}
            fullWidth
            value={loginPassword}
            id="outlined-basic"
            label="Password"
            onChange={(e) => setLoginPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button
            endIcon={<LoginIcon />}
            fullWidth
            style={{ backgroundColor: "#007DED", color: "#fff" }}
            className="my-4"
            variant="contained"
            size="large"
            onClick={() => {
              navigate("/Dashboard");
            }}
          >
            Login
          </Button>
        </Card>
      </div>
    </div>
  );
}
