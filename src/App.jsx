import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const displayRoutes = () =>
		routes.map(({ path, element }) => (
			<Route key={path} path={path} element={element} />
		));

	return (
		<div className="App">
			<Routes>{displayRoutes()}</Routes>
			<ToastContainer autoClose={1000} />
		</div>
	);
}

export default App;
