import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { payCredit } from "../../../api/postRequest";
import { toast } from "react-toastify";
import s from "./index.module.scss";
import { getUserCredits, getUserDetails } from "../../../api/getRequest";
import { useDispatch } from "react-redux";
import { userBalanceUpdate } from "../../../redux/actions";

const PayCreditModal = ({ setPayCreditModal }) => {
	const params = useParams();
	const dispatch = useDispatch()

	const [paymentAmount, setPaymentAmount] = useState("");
	const [creditId, setCreditId] = useState("");

	const [userCredits, setUserCredits] = useState([]);

	const fetchUserCredits = async () => {
		const data = await getUserCredits(params.id);
		setUserCredits(data.credits);
	};

	const handlePayCredit = async () => {
		if (paymentAmount === "" || creditId === "") {
			toast.warning("Fill all inputs");
			return;
		}
		const credit = new Object({
			user_id: +params.id,
			amount_paid: +paymentAmount,
			credit_id: +creditId,
		});

		const response = await payCredit(credit);
		if (response.status === "fail") toast.warning("Credit is already closed");
		else toast.success("Credit Payed!");
		setPayCreditModal(false);
		const data = await getUserDetails(params.id);
		dispatch(userBalanceUpdate(data.balance));
	};

	useEffect(() => {
		fetchUserCredits();
	}, []);

	return (
		<Box className={s.root}>
			<TextField
				value={paymentAmount}
				onChange={({ target }) => setPaymentAmount(target.value)}
				label="Payment Amount"
				type="number"
			/>
			<FormControl fullWidth>
				<InputLabel>Credit ID</InputLabel>
				<Select
					value={creditId}
					label="Credit ID"
					onChange={({ target }) => setCreditId(target.value)}
				>
					{userCredits.map(({ id }) => (
						<MenuItem key={id} value={id}>
							{id}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<Button onClick={handlePayCredit}>Pay Credit</Button>
		</Box>
	);
};

export default PayCreditModal;
