import { getDb } from "../../datasources/db";
import Dao from "../../models/Dao";
import Comment from "../../models/comment/Comment";
import CommentDao from "./CommentDao";

const getCommentDao = (): Dao<number, Comment> => {
  const db = getDb();

  return new CommentDao(db);
};

export default getCommentDao;
