import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import s from "./index.module.scss";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { investBank } from "../../../api/postRequest";
import { getUserDetails } from "../../../api/getRequest";
import { userDetailsAdd } from "../../../redux/actions";
import { useDispatch } from "react-redux";

const InvestModal = ({ setInvestModal }) => {
	const params = useParams();
	const dispatch = useDispatch();

	const [invest, setInvest] = useState("");

	const handleInvest = async () => {
		if (invest === "") {
			toast.warning("Fill all inputs");
			return;
		}
		const newInvestment = new Object({
			user_id: params.id,
			amount: +invest,
		});

		const response = await investBank(newInvestment);
		if (response.status === "fail") toast.warning(response.error_message);
		toast.success("Investment Succeed!");
		setInvestModal(false);
		const data = await getUserDetails(params.id);
		dispatch(userDetailsAdd(data));
	};
	return (
		<Box className={s.root}>
			<TextField
				value={invest}
				onChange={({ target }) => setInvest(target.value)}
				label="Invest Amount"
				type="number"
			/>
			<Button onClick={handleInvest}>Request Credit</Button>
		</Box>
	);
};

export default InvestModal;
