import { Box, FormControl, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";

const Register = () => {
	const inputs = useState({
		username: "",
		password: "",
		phone_number: "",
		address: "",
		email: "",
		type: "",
	});

	// {'username': 'username', 'password': 'password', 'name': 'name', 'address': 'address',
	// # 'phone_number': 'phone_number', 'email': 'email', 'user_type': 'user_type'}

	return (
		<Box>
			<FormControl>
				<TextField label="Username" variant="standard" />
				<TextField label="Password" variant="standard" />
				<TextField label="Name" variant="standard" />
				<TextField label="Address" variant="standard" />
				<TextField label="Phone number" variant="standard" />
				<TextField label="Email" variant="standard" />
				<Select value={inputs.type} label="Type" onChange={() => {}}>
					<MenuItem value="credit">Credit</MenuItem>
					<MenuItem value="deposit">Deposit</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};

export default Register;
