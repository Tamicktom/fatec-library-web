import { create } from "zustand";

export type UserCredentials = {
  email: string;
  password: string;
  nickname: string;
  isLogged: boolean;
  userRole: "client" | "admin";
};

type User = {
  credentials: UserCredentials;
};

const userStore = create<User>((set) => ({
  credentials: {
    email: "",
    password: "",
    nickname: "",
    isLogged: false,
    userRole: "client",
  },
}));

export default userStore;
