// backend/routes/api/index.js
const router = require("express").Router();
const { restoreUser } = require("../../utils/auth.js");

// GET /api/restore-user
router.get("/restore-user", (req, res) => {
	return res.json(req.user);
});

router.use(restoreUser);

module.exports = router;
