import Article from "./Article";
import { RowDataPacket } from "mysql2";

type ArticleRowDataPacket = Article & RowDataPacket;

export default ArticleRowDataPacket;
