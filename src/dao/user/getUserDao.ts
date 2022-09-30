import User from "../../models/user/User";
import { getDb } from "../../datasources/db";
import UserDao from "./UserDao";
import Dao from "../../models/Dao";

const getUserDao = (): Dao<number, User> => {
  const db = getDb();

  return new UserDao(db);
};

export default getUserDao;
