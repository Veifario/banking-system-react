import React, { useEffect, useState } from "react";
import { getUserCredits } from "../../../api/getRequest";
import { useParams } from "react-router-dom";
import s from "./index.module.scss";
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

const AllCreditsModal = () => {
	const params = useParams();

	const [credits, setCredits] = useState([{ amount: 100 }]);

	// const getAllCredits = async () => {
	// 	const data = await getUserCredits(params.id);
	// 	setCredits(data.credits);
	// };

	useEffect(() => {
		// getAllCredits();
	}, []);

	return (
		<div className={s.root}>
			{credits.length ? (
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell align="right">Total Amount</TableCell>
								<TableCell align="right">Interest</TableCell>
								<TableCell align="right">Final Price</TableCell>
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
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			) : (
				<h2>No credits taken</h2>
			)}
		</div>
	);
};

export default AllCreditsModal;
