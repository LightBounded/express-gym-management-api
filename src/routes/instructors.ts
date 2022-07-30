import { Router } from "express";
import Instructor from "../models/Instructor";

const router = Router();

router.get("/", async (req, res) => {
  res.json(await Instructor.find());
});

router.post("/", async (req, res) => {
  res.json(await Instructor.create(req.body));
});

router.delete("/:id", async (req, res) => {
  await Instructor.deleteOne({ id: req.params.id });
  res.end();
});

router.put("/:id", async (req, res) => {
  res.json(
    await Instructor.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
  );
});

export default router;
