import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toast";
import { API_URL } from "../features/classified/classifiedService";
import { getMyClassifieds } from "../features/classified/classifiedSlice";

const MyClassifiedCard = ({
	title,
	classified_id,
	token,
	description,
	bids,
	author,
}) => {
    const dispatch = useDispatch();
	const onAccept = async (bid_id) => {
        
		const config = {
			headers: {
				Authorization: token,
			},
		};
		const body = {
			bid_id,
			classified_id,
		};
		console.log(body);
		try {
			const res = await axios.put(API_URL + "/bid", body, config);
			toast(res.data.message);
            dispatch(getMyClassifieds(token))
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
		<div className="flex flex-col gap-5">
			<div
				href="#"
				class="block p-6 w-full bg-white rounded-lg border border-gray-200 flex flex-col gap-5 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
			>
				<div>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{title}{" "}
					</h5>
					<p class="font-normal text-gray-700 dark:text-gray-400">
						{description}
					</p>
				</div>
				<div>
					<p className="text-sm font-medium text-gray-700">Bids</p>
					<div className="flex gap-3 flex-col">
						{bids.map(({ price, _id }) => (
							<button
								onClick={(e) => onAccept(_id)}
								className="text-white max-w-xs justify center flex gap-3 items-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Accept Bid Price :Rs.{price}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyClassifiedCard;
