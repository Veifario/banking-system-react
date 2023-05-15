import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import s from "./index.module.scss";
import React, { useState } from "react";
import { registerUser } from "../../api/postRequest";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    name: "",
    phone_number: "",
    address: "",
    email: "",
    type: "",
  });

  const signup = async () => {
    for (const input in inputs) {
      if (inputs[input].trim() === "") {
        toast.error("Fill all given fields");
        return;
      }
    }

    const newUser = new Object({
      username: inputs.username,
      password: inputs.password,
      name: inputs.name,
      address: inputs.address,
      phone_number: inputs.phone_number,
      email: inputs.email,
      user_type: inputs.type,
    });

    const data = await registerUser(newUser);
    if (data.status === "fail") {
      toast.error(data.error_message);
      return;
    } else {
      navigate("/login");
      toast.success("Successful registration");
    }
  };

  return (
    <Box className={s.root}>
      <FormControl>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField
              value={inputs.username}
              onChange={({ target }) =>
                setInputs({ ...inputs, username: target.value })
              }
              label="Username"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              value={inputs.password}
              onChange={({ target }) =>
                setInputs({ ...inputs, password: target.value })
              }
              label="Password"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              value={inputs.name}
              onChange={({ target }) =>
                setInputs({ ...inputs, name: target.value })
              }
              label="Name"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={inputs.address}
              onChange={({ target }) =>
                setInputs({ ...inputs, address: target.value })
              }
              label="Address"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              value={inputs.phone_number}
              onChange={({ target }) =>
                setInputs({ ...inputs, phone_number: target.value })
              }
              label="Phone number"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              value={inputs.email}
              onChange={({ target }) =>
                setInputs({ ...inputs, email: target.value })
              }
              label="Email"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={16}>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={inputs.type}
                label="Type"
                onChange={({ target }) =>
                  setInputs({ ...inputs, type: target.value })
                }
              >
                <MenuItem value="credit">Credit</MenuItem>
                <MenuItem value="deposit">Deposit</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Button type="submit" onClick={signup}>
          Sign Up
        </Button>
      </FormControl>
    </Box>
  );
};

export default Register;
