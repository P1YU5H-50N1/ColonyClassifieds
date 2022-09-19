import React, { useState } from "react";

const ClassifiedCard = ({ title, description, author }) => {
	const [bid, setBid] = useState(1);
	const [showInput, setShow] = useState(false);

	const onChange = (e) => {
		setBid(Number(e.target.value));
	};
	const onSubmit = (e) => {
		e.preventDefault();
        setShow(false)
	};
	return (
		<div className="flex justify-between">
			<div
				onClick={() => {
					setShow(true);
				}}
				href="#"
				class="block p-6 w-full bg-white rounded-lg border border-gray-200 flex justify-between shadow-md dark:bg-gray-800 dark:border-gray-700 items-center dark:hover:bg-gray-700"
			>
				<div>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{title}{" "}
					</h5>
					<p class="font-normal text-gray-700 dark:text-gray-400">
						{description}
					</p>
					<p className="text-sm font-medium text-gray-700">
						Posted By {author}
					</p>
				</div>
				<div>
					{showInput ? (
						<form
							className="flex flex-col gap-2.5 items-center"
							onSubmit={onSubmit}
						>
							<input
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								name="bid"
								type="number"
								value={bid}
								onChange={onChange}
							></input>
							<button
								onClick={() => setBid(1)}
								className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Post A Bid
							</button>
						</form>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ClassifiedCard;
