const express = require("express");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const connectDB = require("./config/db");
const setNotifierKeys = require("./config/notifier");
const { errorHandler } = require("./middlewares/errorMiddlerware");
const authRouter = require("./services/auth/auth.Routes");
const classifiedsRouter = require("./services/classifieds/classifieds.Routes");
const biddingRouter = require("./services/bidding/bidding.Routes");
const notifierRouter = require("./services/notifier/notifier.Routes");

connectDB();
setNotifierKeys();

const app = express();

if (process.env.MODE == "development") {
	app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth", authRouter);
app.use("/api/classified", classifiedsRouter);
app.use("/api/bid", biddingRouter);
app.use("/api/notifier", notifierRouter);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at ${port}`));
