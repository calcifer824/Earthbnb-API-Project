const express = require("express");
const router = express.Router();
const apiRouter = require("./api");

router.use("/api", apiRouter);

router.get("/hot/rod", function (req, res) {
	res.cookie("XSRF-TOKEN", req.csrfToken());
	res.send("GODS OF WARRRRRRRRR! May your hammer be mighty.");
});

router.get("/api/csrf/restore", (req, res) => {
	const csrfToken = req.csrfToken();
	res.cookie("XSRF-TOKEN", csrfToken);
	res.status(200).json({
		"XSRF-Token": csrfToken,
	});
});

module.exports = router;
