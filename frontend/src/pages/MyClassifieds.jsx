import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MyClassifiedCard from "../components/MyClassifiedCard";
import Spinner from "../components/Spinner";
import {
	getMyClassifieds,
	reset,
} from "../features/classified/classifiedSlice";

const MyClassifieds = () => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { myClassifieds, isLoading, isError, message } = useSelector(
		(state) => state.classifieds
	);
	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		if (myClassifieds.length === 0 && !isLoading) {
			dispatch(getMyClassifieds(user.jwt.token));
		}
	}, [user, isError, message, dispatch]);

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<div className="container flex flex-col gap-5 mx-auto px-20 pt-5 pb-20">
			{myClassifieds.map(({ title, description, owner, _id, bids }) => (
				<MyClassifiedCard
					key={_id}
					title={title}
					classified_id={_id}
					author={owner.name}
					token={user.jwt.token}
					description={description}
                    bids={bids}
				/>
			))}
            {myClassifieds.length===0? "Try Posting a Classified to get bids":null}
		</div>
	);
};

export default MyClassifieds;
