export interface UserProps {
  id?: number;
  username: string;
  password: string;
  email: string;
  handelCreateUser?:()=>void
}
