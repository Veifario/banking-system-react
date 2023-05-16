import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import s from "./index.module.scss";
import { useParams } from "react-router-dom";
import { takeCredit } from "../../../api/postRequest";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userBalanceUpdate } from "../../../redux/actions";
import { getUserDetails } from "../../../api/getRequest";

const NewCreditModal = ({ setNewCreditModal }) => {
	const params = useParams();
	const dispatch = useDispatch();

	const [creditAmount, setCreditAmount] = useState(0);

	const handleTakeCredit = async () => {
		const credit = new Object({
			user_id: +params.id,
			credit_amount: +creditAmount,
		});
		const response = await takeCredit(credit);
		if (response.status === "fail") toast.warning(response.error_message);
		else toast.success("Credit Approved!");
		setNewCreditModal(false);
		const data = await getUserDetails(params.id);
		dispatch(userBalanceUpdate(data.balance));
	};
	return (
		<Box className={s.root}>
			<TextField
				value={creditAmount}
				onChange={({ target }) => setCreditAmount(target.value)}
				label="Credit Amount"
				type="number"
			/>
			<Button onClick={handleTakeCredit}>Request Credit</Button>
		</Box>
	);
};

export default NewCreditModal;
