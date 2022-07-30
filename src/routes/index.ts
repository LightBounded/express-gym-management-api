import { Router } from "express";
import clients from "./clients";
import groups from "./groups";
import instructors from "./instructors";

const router = Router();

router.use("/clients", clients);
router.use("/instructors", instructors);
router.use("/groups", groups);

export default router;
