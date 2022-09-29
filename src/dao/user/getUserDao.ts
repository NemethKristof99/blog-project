import User from "../../models/user/User";
import { getDb } from "../../datasources/db";
import Dao from "../../models/Dao";
import UserDao from "./UserDao";

const getUserDao = (): Dao<number, User> => {
  const db = getDb();

  return new UserDao(db);
};

export default getUserDao;
