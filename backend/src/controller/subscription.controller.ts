import subscriptionModel from "@/model/subscription.model";
import APIFeatures from "@/utils/apiFeature";
import catchAsync from "@/utils/catchAsync";
import { Request, Response } from "express";

export default {
  getAll: catchAsync(async (req: Request, res: Response) => {
    const features = new APIFeatures(subscriptionModel.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const coins = await features.query;

    res.json({
      status: 200,
      total: coins.length,
      data: coins,
    });
  }),

  getById: catchAsync(async (req: Request, res: Response) => {
    const coin = await subscriptionModel.findById(req.params.id);

    res.json({
      status: 200,
      data: coin,
    });
  }),
};
