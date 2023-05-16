import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.scss";
import { toast } from "react-toastify";
import { userDetailsAdd } from "../../../redux/actions";
import { updateUser } from "../../../api/postRequest";

const SettingModal = ({ setSettingModal }) => {
	const userDetails = useSelector((state) => state.auth.userDetails);
	const dispatch = useDispatch();

	const [approveModal, setApproveModal] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);

	const [data, setData] = useState({
		address: userDetails.address,
		email: userDetails.email,
		name: userDetails.name,
		phoneNumber: userDetails.phone_number,
	});
	const [password, setPassword] = useState("");

	const editUser = async () => {
		if (password.trim() === "") {
			toast.error("Enter password to approve changes");
			return;
		}
		const username = localStorage.getItem("username");
		const updatedUser = new Object({
			address: data.address,
			email: data.email,
			name: data.name,
			phone_number: data.phoneNumber,
			username,
			password,
		});
		const response = await updateUser(updatedUser);
		if (response.status === "fail") {
			toast.error("Password is wrong");
			return;
		}
		toast.success("Information changed");
		dispatch(
			userDetailsAdd({
				...userDetails,
				address: data.address,
				email: data.email,
				name: data.name,
				phone_number: data.phoneNumber,
			})
		);
		setApproveModal(false);
		setSettingModal(false);
	};

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
		<Box className={s.root}>
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
					<Button
						onClick={() => setApproveModal(true)}
						disabled={
							data.address === userDetails.address &&
							data.email === userDetails.email &&
							data.name === userDetails.name &&
							data.phoneNumber === userDetails.phone_number
						}
					>
						Done
					</Button>
					<Button onClick={() => setIsDisabled(!isDisabled)}>Cancel</Button>
				</Box>
			)}
			<Modal open={approveModal} onClose={() => setApproveModal(false)}>
				<Box
					sx={{ ...modalStyles }}
					display="flex"
					alignItems="center"
					gap="20px"
				>
					<TextField
						value={password}
						onChange={({ target }) => setPassword(target.value)}
						label="Password"
						type="password"
					/>
					<Button onClick={editUser}>Approve</Button>
				</Box>
			</Modal>
		</Box>
	);
};

export default SettingModal;
