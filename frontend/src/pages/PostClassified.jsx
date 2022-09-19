import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../features/classified/classifiedService";
import { toast } from "react-toast";
import { useSelector, useDispatch } from "react-redux";

const PostClassified = () => {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		broadcast_radius: "",
	});
	const { title, description, broadcast_radius } = formData;
	const { user } = useSelector((state) => state.auth);
	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		const config = {
			headers: {
				Authorization: user.jwt.token,
			},
		};
		try {
			const res = await axios.post(
				API_URL + "/classified",
				formData,
				config
			);
			setFormData({
				title: "",
				description: "",
				broadcast_radius: "",
			});
			toast(res.data.message);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			toast(message);
		}
	};
	return (
		<div className="container flex flex-col gap-5 mx-auto px-20 pt-5 pb-20">
			<div class="block p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center dark:hover:bg-gray-700">
				<div>
					<h5 class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						New Classified
					</h5>
				</div>
				<form
					onSubmit={onSubmit}
					className="flex w-full max-w-lg flex-col"
				>
					<div class="mb-6 w-full">
						<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
							Title
						</label>
						<input
							type="text"
							name="title"
							value={title}
							onChange={onChange}
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<div class="mb-6 w-full">
						<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
							Description
						</label>
						<textarea
							name="description"
							onChange={onChange}
							value={description}
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<div class="mb-6 w-full">
						<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
							Broadcast Radius
						</label>
						<input
							type="number"
							onChange={onChange}
							name="broadcast_radius"
							value={broadcast_radius}
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<button
						type="submit"
						class="mb-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default PostClassified;
