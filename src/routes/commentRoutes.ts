import { Router } from "express";
import getCommentDao from "../dao/comment/getCommentDao";
import userRoutes from "./userRoutes";

const commentRoutes = Router();

commentRoutes.get("/api/comments", async (_req, res) => {
  try {
    const comments = await getCommentDao().findAll();
    res.set("Content-Type", "application/json");
    res.send(comments || []);
  } catch (e) {
    console.error(e);
    res.send([]);
  }
});

commentRoutes.post("/api/comments", async (req, res) => {
  try {
    const comment = await getCommentDao().create(req.body);

    res.send(comment);
  } catch (err) {
    res.send("Error.");
  }
});

userRoutes.delete("/api/comments/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await getCommentDao().remove(Number(id));
    res.send("Ok.");
  } catch (err) {
    console.error(err);
    res.send("Error.");
  }
});

export default commentRoutes;
