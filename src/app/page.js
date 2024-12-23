import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1>Home page and this is button</h1>
        <Button>
          <Link href={"/login"}>LOGIN</Link>
        </Button>
        <Button>
          <Link href={"/register"}>REGISTER</Link>
        </Button>
      </div>
    </>
  );
}
