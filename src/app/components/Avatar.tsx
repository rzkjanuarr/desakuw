import Image from "next/image";

export default function Avatar() {
  return (
    <div className="flex place-items-center">
      <div className="flex flex-col place-items-center border border-zinc-300 w-[250px] h-[150px]">
        <Image
          className="inline-block rounded-full ring-2 ring-white w-[70px] h-[70px] m-3"
          src="/avatar.avif"
          alt=""
          width="200"
          height="200"
        />
        <div className="py-2">
          <input type="text" className="bg-zinc-300 border-none w-[203px] h-[30px] shadow-sm transition duration-200 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Masukan Nama Kandidat" />
        </div>
      </div>
    </div>
  )
}
