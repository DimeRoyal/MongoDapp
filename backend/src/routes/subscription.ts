import express from "express";
import subscriptionController from "@/controller/subscription.controller";

const router = express.Router();

router.route("/").get(subscriptionController.getAll);
router.route("/:id").get(subscriptionController.getById);

export default router;
