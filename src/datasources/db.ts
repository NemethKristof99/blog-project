import mysql from "mysql2";
import { Pool } from "mysql2/promise";

export type DbPool = Pool;

let db: DbPool;

const initDb = () => {
  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "blog",
    connectionLimit: 10,
    queueLimit: 0,
    waitForConnections: true,
  });
  return pool.promise();
};

export const getDb = () => {
  if (!db) {
    db = initDb();
  }

  return db;
};
