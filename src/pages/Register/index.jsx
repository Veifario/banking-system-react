import {
	Box,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import s from "./index.module.scss";
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
		<Box className={s.root}>
			<FormControl>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<TextField label="Username" variant="standard" fullWidth />
					</Grid>
					<Grid item xs={4}>
						<TextField label="Password" variant="standard" fullWidth />
					</Grid>
					<Grid item xs={4}>
						<TextField label="Name" variant="standard" fullWidth />
					</Grid>
					<Grid item xs={8}>
						<TextField label="Address" variant="standard" fullWidth />
					</Grid>
					<Grid item xs={4}>
						<TextField label="Phone number" variant="standard" fullWidth />
					</Grid>
					<Grid item xs={4}>
						<TextField label="Email" variant="standard" fullWidth />
					</Grid>
					<Grid item xs={16}>
						<FormControl fullWidth>
							<InputLabel>Type</InputLabel>
							<Select value={inputs.type} label="Type" onChange={() => {}}>
								<MenuItem value="credit">Credit</MenuItem>
								<MenuItem value="deposit">Deposit</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
			</FormControl>
		</Box>
	);
};

export default Register;
