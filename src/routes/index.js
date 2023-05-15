import { Greeting, Deposit, Login, Register, Credit } from "../pages";

export const routes = [
	{ path: "/", element: <Greeting /> },
	{ path: "/login", element: <Login /> },
	{ path: "/register", element: <Register /> },
	{ path: "/deposit/:id", element: <Deposit /> },
	{ path: "/credit/:id", element: <Credit /> },
	// {path: "/", element: },
];
