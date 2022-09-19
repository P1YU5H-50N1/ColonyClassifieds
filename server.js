const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const morgan = require("morgan");
const passport = require("passport");
const { JWTStrategy } = require("./config/passport");
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
passport.use(JWTStrategy);

if (process.env.MODE == "development") {
	app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth", authRouter);
app.use(
	"/api/classified",
	passport.authenticate("jwt", { session: false }),
	classifiedsRouter
);

app.use(
	"/api/bid",
	passport.authenticate("jwt", { session: false }),
	biddingRouter
);

app.use(
	"/api/notifier",
	passport.authenticate("jwt", { session: false }),
	notifierRouter
);

if (process.env.MODE === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/build")));

	app.get("*", (req, res) =>
		res.sendFile(
			path.resolve(__dirname, "frontend", "build", "index.html")
		)
	);
} else {
	app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at ${port}`));
