import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);

export default router;

// import express from "express";
// import isAuthenticated from "../middlewares/isAuthenticated.js";
// import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

// const router = express.Router();

// // Public route: Anyone can access the job listings
// router.route("/get").get(getAllJobs);

// // Protected routes: Only authenticated users can access these
// router.route("/post").post(isAuthenticated, postJob);              // Admin can post jobs
// router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);  // Admin can view jobs they posted
// router.route("/get/:id").get(isAuthenticated, getJobById);         // Admin or authenticated users can view a specific job by ID

// export default router;
