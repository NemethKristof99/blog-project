import Dao from "../../models/Dao";
import { DbPool } from "../../datasources/db";
import { OkPacket } from "mysql2";
import Article from "../../models/article/Article";
import ArticleRowDataPacket from "../../models/article/ArticleRowDataPacket";
import mapToArticle from "../../mappers/mapToArticle";

class ArticleDao implements Dao<number, Article> {
  constructor(private db: DbPool) {}

  async create(article: Article) {
    const [result] = await this.db.execute<OkPacket>(
      "INSERT INTO articles (title,body,created_at,author_id) VALUES (?,?,?,?)",
      [article.title, article.body, article.created_at, article.author]
    );

    console.log(result);

    return {
      ...article,
      id: result.insertId,
    };
  }

  async findAll() {
    const [rows] = await this.db.query<ArticleRowDataPacket[]>(
      "SELECT title, body, created_at, u.email AS author_id FROM articles JOIN users u on u.id = articles.author_id"
    );

    return rows.map(mapToArticle);
  }

  async remove(id: number) {
    await this.db.execute<OkPacket>("DELETE FROM articles WHERE id = (?)", [
      id,
    ]);
  }
}

export default ArticleDao;
