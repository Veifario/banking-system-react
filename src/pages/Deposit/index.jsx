import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../api/getRequest";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsAdd } from "../../redux/actions";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import {
	Avatar,
	Box,
	Button,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Modal,
} from "@mui/material";
import SettingModal from "../Credit/SettingModal";
import InvestModal from "./InvestModal";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import HomeIcon from "@mui/icons-material/Home";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const Deposit = () => {
	const params = useParams();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.auth.userDetails);

	const [settingModal, setSettingModal] = useState(false);
	const [investModal, setInvestModal] = useState(false);

	const getUser = async () => {
		const data = await getUserDetails(params.id);
		dispatch(userDetailsAdd(data));
	};

	useEffect(() => {
		getUser();
	}, []);

	if (user === null) return <Loader />;

	return (
		<div>
			<Header setModal={setSettingModal} />
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				gap="10px"
				mt="10px"
			>
				<AccountCircleIcon sx={{ fontSize: "80px", color: "#0a1929" }} />
				<h1 style={{ position: "absolute", top: "7px", letterSpacing: "2px" }}>
					Deposit
				</h1>
				<List
					sx={{
						width: "100%",
						maxWidth: 360,
					}}
				>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<BadgeIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Name" secondary={user.name} />
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<ContactPhoneIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Phone" secondary={user.phone_number} />
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<HomeIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Address" secondary={user.address} />
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<AlternateEmailIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Email" secondary={user.email} />
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<CreditCardIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary="Balance Wait"
							secondary={user.balance_wait}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<CreditScoreIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary="Balance Working"
							secondary={user.balance_working}
						/>
					</ListItem>
				</List>

				<Box display="flex" gap="20px">
					<Button
						sx={{
							transition: ".2s",
							background: "#19A7CE",
							"&:hover": {
								background: "#146C94",
							},
						}}
						variant="contained"
						onClick={() => setInvestModal(true)}
					>
						Invest Money
					</Button>
				</Box>
			</Box>

			<Modal open={settingModal} onClose={() => setSettingModal(false)}>
				<Box>
					<SettingModal setSettingModal={setSettingModal} />
				</Box>
			</Modal>
			<Modal open={investModal} onClose={() => setInvestModal(false)}>
				<Box>
					<InvestModal setInvestModal={setInvestModal} />
				</Box>
			</Modal>
		</div>
	);
};

export default Deposit;
