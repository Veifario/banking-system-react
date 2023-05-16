import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUserDetails } from "../../api/getRequest";
import { userBalanceUpdate, userDetailsAdd } from "../../redux/actions";
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
import SettingModal from "./SettingModal";
import AllCreditsModal from "./AllCreditsModal";
import NewCreditModal from "./NewCreditModal";
import PayCreditModal from "./PayCreditModal";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import HomeIcon from "@mui/icons-material/Home";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const Credit = () => {
	const params = useParams();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.auth.userDetails);
	const balance = useSelector((state) => state.auth.userBalance);

	const [settingModal, setSettingModal] = useState(false);
	const [allCreditsModal, setAllCreditsModal] = useState(false);
	const [newCreditModal, setNewCreditModal] = useState(false);
	const [payCreditModal, setPayCreditModal] = useState(false);

	const getUser = async () => {
		const data = await getUserDetails(params.id);
		dispatch(userDetailsAdd(data));
		dispatch(userBalanceUpdate(data.balance));
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
					Credit
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
						<ListItemText primary="Balance" secondary={balance} />
					</ListItem>
				</List>

				<Box display="flex" gap="20px" mt="20px">
					<Button
						sx={{
							transition: ".2s",
							background: "#19A7CE",
							"&:hover": {
								background: "#146C94",
							},
						}}
						variant="contained"
						onClick={() => setAllCreditsModal(true)}
					>
						All Credits
					</Button>
					<Button
						sx={{
							transition: ".2s",
							background: "#19A7CE",
							"&:hover": {
								background: "#146C94",
							},
						}}
						variant="contained"
						onClick={() => setNewCreditModal(true)}
					>
						Take Credit
					</Button>
					<Button
						sx={{
							transition: ".2s",
							background: "#19A7CE",
							"&:hover": {
								background: "#146C94",
							},
						}}
						variant="contained"
						onClick={() => setPayCreditModal(true)}
					>
						Pay Credit
					</Button>
				</Box>
			</Box>
			<Modal open={settingModal} onClose={() => setSettingModal(false)}>
				<Box>
					<SettingModal setSettingModal={setSettingModal} />
				</Box>
			</Modal>
			<Modal open={allCreditsModal} onClose={() => setAllCreditsModal(false)}>
				<Box>
					<AllCreditsModal />
				</Box>
			</Modal>
			<Modal open={newCreditModal} onClose={() => setNewCreditModal(false)}>
				<Box>
					<NewCreditModal setNewCreditModal={setNewCreditModal} />
				</Box>
			</Modal>
			<Modal open={payCreditModal} onClose={() => setPayCreditModal(false)}>
				<Box>
					<PayCreditModal setPayCreditModal={setPayCreditModal} />
				</Box>
			</Modal>
		</div>
	);
};

export default Credit;
