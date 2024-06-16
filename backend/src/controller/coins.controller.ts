import coinModel from "@/model/coins.model";
import APIFeatures from "@/utils/apiFeature";
import catchAsync from "@/utils/catchAsync";
import { Request, Response } from "express";

export default {
  getAll: catchAsync(async (req: Request, res: Response) => {
    const features = new APIFeatures(coinModel.find(), req.query)
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
    const coin = await coinModel.findById(req.params.id);

    res.json({
      status: 200,
      data: coin,
    });
  }),

  create: catchAsync(async (req: Request, res: Response) => {}),

  update: catchAsync(async (req: Request, res: Response) => {}),

  delete: catchAsync(async (req: Request, res: Response) => {})
};
