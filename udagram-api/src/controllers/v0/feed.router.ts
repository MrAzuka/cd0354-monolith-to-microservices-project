import { FeedRouter } from "./feed/routes/feed.router";
import { Router, Request, Response } from "express";

const router: Router = Router();

router.use("/feed", FeedRouter);

export const FeedRouter: Router = router;
