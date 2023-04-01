import Image from "next/image";
import Button from "../components/Button";
import Head from "next/head";

export default function Participant() {
  return (
    <div>
      <Head>
        <title>Participant Voting</title>
      </Head>
      <div className="min-h-screen flex justify-center items-center flex-col space-y-4">
        <Image src={"/brand-content3.svg"} alt={"Logo Brand Content 3"} width={351} height={280} />
        <h1 className="text-4xl font-bold">Ikutan Voting</h1>
        <h2 className="">Untuk ikutan voting, kamu harus memasukkan kode voting yang sudah di berikan
          panitia/penyelenggara</h2>
        <input type="text" placeholder="Masukan Kode Voting" className="border border-none bg-zinc-100 w-[370px] h-[40px] focus:ring-2 focus:border-primary shadow-sm transition duration-200 focus:ring-primary" />
        <Button
          type="primary"
          text="Lanjutkan"
          className="w-[370px] h-[40px]"
        />
        <Button
          type="secondary"
          text="Kembali"
          className="w-[370px] h-[40px]"
        />
      </div>
    </div>
  )
}
