// addTask.ts
import { httpAxios } from "@/helper/httpHelper";

export async function addUser(user) {
    const result = await httpAxios.post("/api/users", user).then((res) => res.data);
    return result;
}
