import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";

function App() {
	const displayRoutes = () =>
		routes.map(({ path, element }) => (
			<Route key={path} path={path} element={element} />
		));

	return (
		<div className="App">
			<Routes>{displayRoutes()}</Routes>
		</div>
	);
}

export default App;
