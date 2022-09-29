import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import commentRoutes from "./routes/commentRoutes";
import articleRoutes from "./routes/articleRoutes";

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use(userRoutes);
app.use(commentRoutes);
app.use(articleRoutes);

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
