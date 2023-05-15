import React from "react";
import s from "./index.module.scss";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Greeting = () => {
	const navigate = useNavigate();

	return (
		<div className={s.root}>
			<h2>
				Hello User! <br /> Do you have an account?
			</h2>
			<Stack direction="row" spacing={3}>
				<Button variant="contained" onClick={() => navigate("/login")}>
					Yes
				</Button>
				<Button variant="contained" onClick={() => navigate("/register")}>
					No
				</Button>
			</Stack>
		</div>
	);
};

export default Greeting;
