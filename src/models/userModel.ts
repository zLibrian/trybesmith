import { ResultSetHeader } from 'mysql2';
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
};

export default userModel;