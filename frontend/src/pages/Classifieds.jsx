import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getClassifieds, reset } from "../features/classified/classifiedSlice";
import Spinner from "../components/Spinner";
import ClassifiedCard from "../components/ClassifiedCard";

const Classifieds = () => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { classifieds, isLoading, isError, message } = useSelector(
		(state) => state.classifieds
	);
	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		if (classifieds.length === 0 && !isLoading) {
			dispatch(getClassifieds(user.jwt.token));
		}

		return () => {
			dispatch(reset());
		};
	}, [user, isError, message, dispatch]);

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<div className="container flex flex-col gap-5 mx-auto px-20 pt-5 pb-20">
			{classifieds.map(({ title, description, owner,_id }) => (
				<ClassifiedCard
                    key={_id}
					title={title}
                    classified_id={_id}
					author={owner.name}
                    token={user.jwt.token}
					description={description}
				/>
			))}
		</div>
	);
};

export default Classifieds;
