import Dao from "../../models/Dao";
import User from "../../models/user/User";
import { DbPool } from "../../datasources/db";
import { OkPacket } from "mysql2";
import UserRowDataPacket from "../../models/user/UserRowDataPacket";
import mapToUser from "../../mappers/mapToUser";

class UserDao implements Dao<number, User> {
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
}

export default UserDao;
