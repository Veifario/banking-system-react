import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import s from "./index.module.scss";
import { loginUser } from "../../api/postRequest";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogged } from "../../redux/actions";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const setUsername = ({ target }) =>
    setInputs({ ...inputs, username: target.value });
  const setPassword = ({ target }) =>
    setInputs({ ...inputs, password: target.value });

  const login = async () => {
    if (inputs.username.trim() === "" || inputs.password.trim() === "") {
      toast.error("Fill all given fields");
      return;
    } else {
      const userData = new Object({
        username: inputs.username,
        password: inputs.password,
      });
      const data = await loginUser(userData);
      if (data.status === "success") {
        dispatch(
          userLogged({
            user_id: data.user_id,
            user_type: data.user_type,
            username: data.username,
          })
        );
        navigate(`/${data.user_type}/${data.user_id}`);
      } else {
        toast.error(data.error_message);
      }
    }
  };

  return (
    <Box className={s.root}>
      <FormControl>
        <TextField
          required
          value={inputs.username}
          onChange={setUsername}
          label="Username"
          variant="standard"
        />
        <TextField
          required
          value={inputs.password}
          onChange={setPassword}
          label="Password"
          variant="standard"
          type="password"
        />
        <Button onClick={login} type="submit" size="large">
          Login
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
