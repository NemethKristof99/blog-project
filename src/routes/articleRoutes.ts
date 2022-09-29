import { Router } from "express";
import getArticleDao from "../dao/article/getArticleDao";

const articleRoutes = Router();

articleRoutes.get("/api/articles", async (_req, res) => {
  try {
    const users = await getArticleDao().findAll();
    res.set("Content-Type", "application/json");
    res.send(users || []);
  } catch (e) {
    console.error(e);
    res.send([]);
  }
});

export default articleRoutes;
