import express from "express";
import coinController from "@/controller/coins.controller";

const router = express.Router();

router.route("/").get(coinController.getAll);
router.route("/:id").get(coinController.getById);

export default router;
