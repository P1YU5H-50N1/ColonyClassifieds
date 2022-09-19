import React, { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toast";
import { reset } from "../features/auth/authSlice.js";
import { useSelector, useDispatch } from "react-redux";

const Protect = ({ children }) => {
	const publicRoutes = ["/login", "/register"];

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		if (isError) {
			toast.error(message);
		}
		if (isSuccess || user) {
			navigate("/");
		}
		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	if (user) {
		if (publicRoutes.includes(window.location.pathname)) {
			return <Navigate to="/" />;
		} else {
			return children;
		}
	} else {
		if (publicRoutes.includes(window.location.pathname)) {
			return children;
		} else {
			return <Navigate to="/login" />;
		}
	}
};

export default Protect;
