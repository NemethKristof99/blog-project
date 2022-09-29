import { getDb } from "../../datasources/db";
import Dao from "../../models/Dao";
import Article from "../../models/article/Article";
import ArticleDao from "./ArticleDao";

const getArticleDao = (): Dao<number, Article> => {
  const db = getDb();

  return new ArticleDao(db);
};

export default getArticleDao;
