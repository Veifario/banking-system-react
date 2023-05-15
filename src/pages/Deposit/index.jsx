import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../api/getRequest";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../../redux/actions";
import Loader from "../../components/Loader";

const Deposit = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.userDetails);
	console.log(user);
	const getUser = async () => {
		const data = await getUserDetails(params.id);
		dispatch(userDetails(data));
	};

	useEffect(() => {
		getUser();
	}, []);

	if (user === null) return <Loader />;

	return (
		<div>
			<h1>Deposit:</h1>
			<p>{user.name}</p>
			<p>{user.phone_number}</p>
		</div>
	);
};

export default Deposit;
