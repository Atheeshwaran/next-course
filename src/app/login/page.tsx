"use client";

import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useLogin } from "./useLogin";

export default function LoginPage() {
  const { email, password, onChange, onSubmit } = useLogin();
  return (
    <Card
      style={{
        width: "30%",
        top: "50%",
        left: "50%",
        margin: "auto",
        padding: "2rem",
        position: "absolute",
        transform: "translate(-50%, -50%)",
      }}
    >
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => onChange(e, "email")}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => onChange(e, "password")}
      />
      <Button variant="contained" color="primary" onClick={onSubmit}>
        Login
      </Button>
    </Card>
  );
}
