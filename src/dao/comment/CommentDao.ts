import Dao from "../../models/Dao";
import { DbPool } from "../../datasources/db";
import { OkPacket } from "mysql2";
import mapToComment from "../../mappers/mapToComment";
import Comment from "../../models/comment/Comment";
import CommentRowDataPacket from "../../models/comment/CommentRowDataPacket";

class CommentDao implements Dao<number, Comment> {
  constructor(private db: DbPool) {}

  async create(comment: Comment) {
    const [result] = await this.db.execute<OkPacket>(
      "INSERT INTO comments (body,author_id,article_id) VALUES (?,?,?)",
      [comment.body, comment.author, comment.article]
    );

    console.log(result);

    return {
      ...comment,
      id: result.insertId,
    };
  }

  async findAll() {
    const [rows] = await this.db.query<CommentRowDataPacket[]>(
      "SELECT * FROM comments"
    );

    return rows.map(mapToComment);
  }

  async remove(id: number) {
    await this.db.execute<OkPacket>("DELETE FROM comments WHERE id = (?)", [
      id,
    ]);
  }
}

export default CommentDao;