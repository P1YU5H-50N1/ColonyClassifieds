import React from "react";
import { toast } from "react-toast";
import { useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const Register = () => {
	const [details, setDetails] = useState({
		name: "",
		email: "",
		password: "",
		location: {},
	});
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state) => state.auth);

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				setDetails({
					...details,
					location: {
						lat: position.coords.latitude,
						long: position.coords.longitude,
					},
				});
			});
		}
	}, []);

	const onChange = (e) => {
		setDetails({
			...details,
			[e.target.name]: e.target.value,
		});
	};
	const onSubmit = (e) => {
		e.preventDefault();
		if (details.location === {}) {
			toast("Kindly allow location");
		} else {
			// console.log(details);
			dispatch(register(details));
		}
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="w-full max-w-md space-y-8">
					<div>
						<CubeTransparentIcon className="mx-auto h-24 w-auto text-sky-500" />

						<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-800">
							Register
						</h2>
						<p className="mt-2 text-center text-sm text-gray-600">
							Welcome to Colony Classifieds
							<br />
							<a
								href="#"
								className="font-medium text-sky-600 hover:text-sky-500"
							>
								Terraformer
							</a>
							<br/>
							Some APIs are not integrated so there is missing functionality
						</p>
					</div>
					<form
						onSubmit={onSubmit}
						className="mt-8 space-y-6"
						action="#"
						method="POST"
					>
						<div className="-space-y-px rounded-md shadow-sm">
							<div>
								<label
									htmlFor="email-address"
									className="sr-only"
								>
									Email address
								</label>
								<input
									onChange={onChange}
									value={details.email}
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Email address"
								/>
							</div>
							<div>
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input
									onChange={onChange}
									value={details.password}
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Password"
								/>
							</div>
							<div>
								<label className="sr-only">FullName</label>
								<input
									onChange={onChange}
									value={details.name}
									name="name"
									type="text"
									required
									className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Full Name"
								/>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								<span className="absolute inset-y-0 left-0 flex items-center pl-3">
									<LockClosedIcon
										className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
										aria-hidden="true"
									/>
								</span>
								Sign in
							</button>
						</div>
					</form>
					<div>
						<Link to="/Login">
							<button
								type="submit"
								className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Login
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
