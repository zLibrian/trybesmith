export type User = {
  username: string,
  classe: string,
  level: number,
  password: string, 
};

export type AddedUser = User & {
  id: number,
};
export type Token = {
  token: string
};