import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<>
			<Router>
				<div>
					<Routes>
						<Route path="/" element={<Navigate to="/register" />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</div>
			</Router>
			{/* <ToastContainer /> */}
		</>
	);
}

export default App;
