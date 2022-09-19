import React from "react";

const ClassifiedCard = ({ title, description, author }) => {
	return (
		<div>
			<div
				href="#"
				class="block p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
			>
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
		</div>
	);
};

export default ClassifiedCard;
