import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	};

	return ["/login", "/register"].includes(window.location.pathname) ? null : (
		<div className="mx-auto w-screen px-40 sm:px-6 bg-white flex justify-between border-b-2 border-gray-100 py-6 items-center">
			<div className="ml-8">
				<CubeTransparentIcon className="mx-auto h-10 w-auto text-sky-500" />
			</div>
			<div className="mr-8 flex items-center">
				{user ? (
					<button
						onClick={onLogout}
						className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						Logout
					</button>
				) : null}
			</div>
		</div>
	);
};

export default Header;
