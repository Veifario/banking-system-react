import { Greeting, Home, Login, Register } from "../pages";

export const routes = [
	{ path: "/", element: <Greeting /> },
	{ path: "/login", element: <Login /> },
	{ path: "/register", element: <Register /> },
	{ path: "/home/:id", element: <Home /> },
	// {path: "/", element: },
];
