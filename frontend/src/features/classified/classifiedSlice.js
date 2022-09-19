import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import classifiedService from "./classifiedService";

const initialState = {
	classifieds: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

export const getClassifieds = createAsyncThunk(
	"classified/getClassifieds",
	async (token, thunkAPI) => {
		try {
			return await classifiedService.getClassifieds(token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const classifiedSlice = createSlice({
	name: "classifieds",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getClassifieds.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getClassifieds.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.classifieds = action.payload;
			})
			.addCase(getClassifieds.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const {reset} = classifiedSlice.actions;
export default classifiedSlice.reducer;