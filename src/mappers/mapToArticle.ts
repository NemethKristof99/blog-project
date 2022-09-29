import ArticleRowDataPacket from "../models/article/ArticleRowDataPacket";
import Article from "../models/article/Article";

const mapToArticle = (row: ArticleRowDataPacket): Article => ({
  id: row.id,
  title: row.title,
  body: row.body,
  created_at: row.created_at,
  author: row.author_id,
});

export default mapToArticle;
