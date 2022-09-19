import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import React from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toast";
import Protect from "./components/Protect";
import Header from "./components/Header";
import Register from "./pages/Register";
import Classifieds from "./pages/Classifieds";
import MyClassifieds from "./pages/MyClassifieds";
import PostClassified from "./pages/PostClassified";

function App() {
	return (
		<>
			<Router>
				<div>
				<Header />
					<Routes>
						<Route
							path="/"
							element={
								<Protect>
									<Classifieds/>
								</Protect>
							}
						/>
						<Route
							path="/myClassifieds"
							element={
								<Protect>
									<MyClassifieds/>
								</Protect>
							}
						/>
						<Route
							path="/new"
							element={
								<Protect>
									<PostClassified/>
								</Protect>
							}
						/>
						<Route
							path="/login"
							element={
								<Protect>
									<Login />
								</Protect>
							}
						/>
						<Route
							path="/register"
							element={
								<Protect>
									<Register />
								</Protect>
							}
						/>
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
