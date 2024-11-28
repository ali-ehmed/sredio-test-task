const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authenticateUser");
const authController = require("../controllers/api/authController");
const githubController = require("../controllers/api/githubController");

// Auth Controller routes
router.get("/auth/check-auth", authenticateUser, authController.checkAuthStatus);
router.get("/auth/logout", authenticateUser, authController.logout);

// GitHub Controller routes
router.post("/sync-organizations", authenticateUser, githubController.syncOrganizationsData);
router.post("/sync-repositories-data", authenticateUser, githubController.syncRepositoriesData);

module.exports = router;