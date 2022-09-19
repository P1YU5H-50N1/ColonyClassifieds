import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getClassifieds, reset } from "../features/classified/classifiedSlice";
import Spinner from "../components/Spinner";
import ClassifiedCard from "../components/ClassifiedCard";

const Classifieds = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { classifieds, isLoading, isError, message } = useSelector(
		(state) => state.classifieds
	);
	useEffect(() => {
		console.log([user, navigate, isError, message, dispatch]);
		if (isError) {
			console.log(message);
		}
		if (classifieds.length === 0 && !isLoading) {
			dispatch(getClassifieds(user.jwt.token));
		}

		return () => {
			dispatch(reset());
		};
	}, [user, navigate, isError, message, dispatch]);

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<div className="container flex flex-col gap-5 mx-auto px-20 pt-5 pb-20">
			{classifieds.map(({ title, description, owner }) => (
				<ClassifiedCard
					title={title}
					author={owner.name}
					description={description}
				/>
			))}
		</div>
	);
};

export default Classifieds;
