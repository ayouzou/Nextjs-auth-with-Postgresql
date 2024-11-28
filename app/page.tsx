import Image from "next/image";
import RegisterForm from "./components/RegisterForm";
import LogoutButton from "./components/LogoutButton";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center my-auto ">
      <h1>Home page</h1>
      <LogoutButton />
    </main>
  );
}
