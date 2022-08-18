import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Login } from '../types/login';
import { AddedUser, User } from '../types/user';
import connection from './connection';

const userModel = {
  create: async (user: User): Promise<AddedUser> => {
    const { username, classe, level, password } = user;
    const insertSql = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?);`;
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      insertSql,
      [username, classe, level, password],
    );
    const insertedUser = { id: insertId, ...user };
    return insertedUser;
  },
  getByUsername: async (credentials: Login): Promise<AddedUser | undefined> => {
    const { username, password } = credentials;
    const selectSql = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
    const [[user]] = await connection.execute<RowDataPacket[]>(selectSql, [username, password]);
    return user as AddedUser | undefined;
  },
};

export default userModel;
