"use client";
import Button from "@/app/components/Button";
import Menu from "@/app/components/Menu";
import Head from "next/head";
import Image from "next/image";

export default function CreateVote() {
  return (
    <div>
      <Head>
        <title>Voting Baru</title>
      </Head>
      <Menu />
      <div className="flex flex-col place-items-center space-y-5">
        <Image src={"/brand-content2.svg"} alt={"Voting Baru"} width={284} height={198} className="mt-5" />
        <div className="py-5 flex flex-col place-items-center">
          <h1 className=" font-bold text-2xl mb-2">Buat Voting Baru</h1>
          <h2>Silahkan masukkan data yang dibutuhkan sebelum membuat vote online.</h2>
        </div>
        <input type="text" className="bg-zinc-100 w-[550px] h-10 border-none shadow-sm transition duration-200 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Isi Judul Voting." />
        <div className="flex flex-row space-x-4">
          <input type="date" className="bg-zinc-100 w-[250px] h-10 border-none shadow-sm transition duration-200 focus:ring-2 focus:ring-primary focus:border-primary" />
          <p className="self-center">to</p>
          <input type="date" className="bg-zinc-100 w-[250px] h-10 border-none shadow-sm transition duration-200 focus:ring-2 focus:ring-primary focus:border-primary" />
        </div>
        <div className="py-3 flex flex-row">
          <div className="flex flex-col place-items-center border border-zinc-300 w-[262px] h-[150px] mr-5">
            <Image
              className="inline-block rounded-full ring-2 ring-white w-[70px] h-[70px] m-3"
              src="/avatar.avif"
              alt=""
              width="200"
              height="200"
            />
            <div className="py-2">
              <input type="text" className="bg-zinc-100 border-none w-[203px] h-[30px] shadow-sm transition duration-200 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Masukan Nama Kandidat" />
            </div>
          </div>

          <div className="flex flex-col place-items-center border border-zinc-300 w-[262px] h-[150px]">

          </div>
        </div>
        <div className="pb-10">
          <Button
            text="Buat Vote Baru"
            type="primary"
            className="w-[550px] h-10"
          />
        </div>
      </div>
    </div>
  )
}
