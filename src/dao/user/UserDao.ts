import User from "../../models/user/User";
import { DbPool } from "../../datasources/db";
import { OkPacket } from "mysql2";
import UserRowDataPacket from "../../models/user/UserRowDataPacket";
import mapToUser from "../../mappers/mapToUser";
import mapToArticle from "../../mappers/mapToArticle";
import ArticleRowDataPacket from "../../models/article/ArticleRowDataPacket";
import UserSpecificDao from "../../models/UserSpecificDao";
import Article from "../../models/article/Article";

class UserDao implements UserSpecificDao<number, User, Article> {
  constructor(private db: DbPool) {}

  async create(user: User) {
    const [result] = await this.db.execute<OkPacket>(
      "INSERT INTO users (email) VALUES (?)",
      [user.email]
    );

    console.log(result);

    return {
      ...user,
      id: result.insertId,
    };
  }

  async findAll() {
    const [rows] = await this.db.query<UserRowDataPacket[]>(
      "SELECT * FROM users"
    );

    return rows.map(mapToUser);
  }

  async remove(id: number) {
    await this.db.execute<OkPacket>("DELETE FROM users WHERE id = (?)", [id]);
  }

  async getOne(id: number) {
    const [rows] = await this.db.query<ArticleRowDataPacket[]>(
      "SELECT * FROM articles WHERE articles.author_id = (?)",
      [id]
    );

    return rows.map(mapToArticle);
  }
}

export default UserDao;
