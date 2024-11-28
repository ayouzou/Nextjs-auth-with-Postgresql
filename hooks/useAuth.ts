import { deleteCookie } from "@/app/utils/auth";
import { SessionContext } from "@/context/auth";
import { useContext } from "react";


export default function useAuth() {
  const authContext = useContext(SessionContext);

  return { auth: authContext, logout: () => deleteCookie("token") };
}
