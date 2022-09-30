import { Router } from "express";
import getUserDao from "../dao/user/getUserDao";

const userRoutes = Router();

userRoutes.get("/api/users", async (_req, res) => {
  try {
    const users = await getUserDao().findAll();
    res.set("Content-Type", "application/json");
    res.send(users || []);
  } catch (e) {
    console.error(e);
    res.send([]);
  }
});

userRoutes.post("/api/users", async (req, res) => {
  try {
    const user = await getUserDao().create(req.body);

    res.send(user);
  } catch (err) {
    res.send("Error.");
  }
});

userRoutes.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const users = await getUserDao().getOne(Number(id));
    if (users.length == 0) {
      res.sendStatus(404);
    } else {
      await getUserDao().remove(Number(id));
      res.send("Ok.");
    }
  } catch (err) {
    console.error(err);
    res.send("Error.");
  }
});

export default userRoutes;
