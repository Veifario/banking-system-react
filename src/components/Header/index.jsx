import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = ({ setModal }) => {
	const navigate = useNavigate();

	return (
		<Box
			sx={{
				background: "var(--dark)",
				display: "flex",
				justifyContent: "space-between",
			}}
			p="15px 20px"
		>
			<LogoutIcon
				sx={{
					cursor: "pointer",
					fontSize: "30px",
					color: "#19A7CE",
					transition: ".2s",
					"&:hover": {
						color: "#146C94",
					},
				}}
				onClick={() => navigate("/login")}
			/>
			<SettingsIcon
				sx={{
					cursor: "pointer",
					transition: ".2s",
					color: "#19A7CE",
					fontSize: "30px",
					"&:hover": {
						transform: "rotate(90deg)",
						color: "#146C94",
					},
				}}
				onClick={() => setModal(true)}
			/>
		</Box>
	);
};

export default Header;
