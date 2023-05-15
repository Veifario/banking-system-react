import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import s from "./index.module.scss";

const SettingModal = () => {
  const user = useSelector((state) => state.auth.userDetails);

  const [isDisabled, setIsDisabled] = useState(true);
  const [data, setData] = useState({
    address: user.address,
    balance: user.balance,
    email: user.email,
    name: user.name,
    phoneNumber: user.phone_number,
  });

  const editUser = (user) => {};

  return (
    <Box className={s.root}>
      {/* <TextField
        disabled={isDisabled}
        label="Balance"
        value={data.balance}
        onChange={(e) => setData({ ...data, balance: e.target.value })}
      /> */}
      <TextField
        disabled={isDisabled}
        label="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <TextField
        disabled={isDisabled}
        label="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <TextField
        disabled={isDisabled}
        label="Phone Number"
        value={data.phoneNumber}
        onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
      />
      <TextField
        disabled={isDisabled}
        label="Address"
        value={data.address}
        onChange={(e) => setData({ ...data, address: e.target.value })}
      />
      {isDisabled ? (
        <Button onClick={() => setIsDisabled(!isDisabled)}>Edit</Button>
      ) : (
        <Box className={s.buttons}>
          <Button>Done</Button>
          <Button onClick={() => setIsDisabled(!isDisabled)}>Cancel</Button>
        </Box>
      )}
    </Box>
  );
};

export default SettingModal;
