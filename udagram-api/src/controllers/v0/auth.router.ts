import { Router, Request, Response } from "express";
import { UserRouter } from "./users/routes/user.router";

router.use("/users", UserRouter);

router.get("/", async (req: Request, res: Response) => {
	res.send(`V0`);
});

export const AuthRouter: Router = router;