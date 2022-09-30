import { Router } from "express";
import getArticleDao from "../dao/article/getArticleDao";

const articleRoutes = Router();

articleRoutes.get("/api/articles", async (_req, res) => {
  try {
    const articles = await getArticleDao().findAll();
    res.set("Content-Type", "application/json");
    res.send(articles || []);
  } catch (e) {
    console.error(e);
    res.send([]);
  }
});

articleRoutes.post("/api/articles", async (req, res) => {
  try {
    const article = await getArticleDao().create(req.body);

    res.send(article);
  } catch (err) {
    res.send("Error.");
  }
});

articleRoutes.delete("/api/articles/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await getArticleDao().remove(Number(id));
    res.send("Ok.");
  } catch (err) {
    console.error(err);
    res.send("Error.");
  }
});

export default articleRoutes;
