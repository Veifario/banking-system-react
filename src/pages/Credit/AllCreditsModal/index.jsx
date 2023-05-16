import React, { useEffect, useState } from "react";
import { getRepayment, getUserCredits } from "../../../api/getRequest";
import { useParams } from "react-router-dom";
import s from "./index.module.scss";
import {
	Box,
	Button,
	Modal,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import loaderImg from "../../../assets/img/loader.svg";

const AllCreditsModal = () => {
	const params = useParams();

	const [repaymentModal, setRepaymentModal] = useState(false);
	const [loader, setLoader] = useState(false);
	const [repaymentLoader, setRepaymentLoader] = useState(false);

	const [credits, setCredits] = useState([]);
	const [repayment, setRepayment] = useState([]);

	const getAllCredits = async () => {
		setLoader(true);
		const data = await getUserCredits(params.id);
		setCredits(data.credits);
		setLoader(false);
	};

	const handleRepayment = async (creditId) => {
		setRepaymentLoader(true);
		setRepaymentModal(true);
		const response = await getRepayment(params.id, creditId);
		setRepayment(response.repayment_schedule);
		setRepaymentLoader(false);
	};

	useEffect(() => {
		getAllCredits();
	}, []);

	const modalStyles = {
		position: "absolute",
		top: "50%",
		left: "50%",
		padding: "50px",
		borderRadius: "2px",
		transform: "translate(-50%, -50%)",
		backgroundColor: "white",
	};

	return (
		<div className={s.root}>
			{loader ? (
				<img src={loaderImg} />
			) : credits.length ? (
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell align="right">Total Amount</TableCell>
								<TableCell align="right">Interest</TableCell>
								<TableCell align="right">Final Price</TableCell>
								<TableCell align="right"></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{credits.map(({ id, total_amount, interest, final_price }) => (
								<TableRow
									key={id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{id}
									</TableCell>
									<TableCell align="right">{total_amount}</TableCell>
									<TableCell align="right">{interest}</TableCell>
									<TableCell align="right">{final_price}</TableCell>
									<TableCell align="right">
										<Button onClick={() => handleRepayment(id)}>More</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			) : (
				<h2>No credits taken</h2>
			)}
			<Modal open={repaymentModal} onClose={() => setRepaymentModal(false)}>
				<Box sx={{ ...modalStyles }}>
					{repaymentLoader ? (
						<img src={loaderImg} />
					) : (
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>№</TableCell>
										<TableCell align="right">Credit Amount Due</TableCell>
										<TableCell align="right">Due Date</TableCell>
										<TableCell align="right">Interest Amount Due</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{repayment.map(
										(
											{ credit_amount_due, due_date, interest_amount_due },
											id
										) => (
											<TableRow
												key={id}
												sx={{
													"&:last-child td, &:last-child th": { border: 0 },
												}}
											>
												<TableCell component="th" scope="row">
													{id + 1}
												</TableCell>
												<TableCell align="right">{credit_amount_due}</TableCell>
												<TableCell align="right">{due_date}</TableCell>
												<TableCell align="right">
													{interest_amount_due}
												</TableCell>
											</TableRow>
										)
									)}
								</TableBody>
							</Table>
						</TableContainer>
					)}
				</Box>
			</Modal>
		</div>
	);
};

export default AllCreditsModal;
