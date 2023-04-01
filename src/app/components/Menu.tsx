import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex justify-between py-5">
      <Link href={"/"}>
        <Image src={"/desakuw.svg"} width={100} height={100} alt={"Logo-Desakuw."} />
      </Link>
      <Link href={"/"}>
        <Button text="Login" />
      </Link>
    </div>
  )
}
