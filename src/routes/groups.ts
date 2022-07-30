import { Router } from "express";
import Group from "../models/Group";

const router = Router();

router.get("/", async (req, res) => {
  res.json(await Group.find());
});

router.post("/", async (req, res) => {
  res.json(await Group.create(req.body));
});

router.delete("/:id", async (req, res) => {
  await Group.deleteOne({ id: req.params.id });
  res.end();
});

router.put("/:id", async (req, res) => {
  res.json(
    await Group.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
  );
});

export default router;
