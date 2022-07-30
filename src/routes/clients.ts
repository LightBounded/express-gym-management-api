import { Router } from "express";
import Client from "../models/Client";

const router = Router();

router.get("/", async (req, res) => {
  res.json(await Client.find());
});

router.post("/", async (req, res) => {
  res.json(await Client.create(req.body));
});

router.delete("/:id", async (req, res) => {
  await Client.deleteOne({ id: req.params.id });
  res.end();
});

router.put("/:id", async (req, res) => {
  res.json(
    await Client.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
  );
});

export default router;
