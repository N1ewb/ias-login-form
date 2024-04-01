import { User } from "next-auth";

type MyUser = User & {
  firstName: string;
  lastName: string;
  role: string;
};