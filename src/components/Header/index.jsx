import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";
import SettingsIcon from "@mui/icons-material/Settings";

const Header = ({ setModal }) => {
	return (
		<Box
			sx={{
				background: "var(--dark)",
				display: "flex",
				justifyContent: "flex-end",
			}}
			p="15px 20px"
		>
			<SettingsIcon
				color="warning"
				sx={{ cursor: "pointer" }}
				onClick={() => setModal(true)}
			/>
		</Box>
	);
};

export default Header;
