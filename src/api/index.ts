import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../constant/const";
import { UserProps } from "../ts/Type";

export const postUser = async (user: UserProps) => {
  try {
    const get = await axios.get(`${BASE_URL}/users`);
    const existingLocation = get.data.find(
      (item: { email: string }) => item.email === user.email
    );
    if (!existingLocation) {
      const res = await axios.post(`${BASE_URL}/users`, user);
      return res;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const filterUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const res: AxiosResponse = await axios.get(
      `${BASE_URL}/users?username=${username}&password=${password}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
