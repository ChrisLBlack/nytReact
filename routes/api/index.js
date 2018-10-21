const router = require("express").Router();
const bookRoutes = require("./articles");

// Book routes
router.use("/articles", articleRoutes);

module.exports = router;