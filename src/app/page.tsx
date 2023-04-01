import Image from "next/image";
import Menu from "./components/Menu";
import Button from "./components/Button";
import { LinkIcon, TrashIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="flex flex-col place-items-center py-12 space-y-4">
        <h1 className="text-4xl font-bold">
          Ayo Mulai Berbenah!
        </h1>
        <h2 className="text-lg bg-primary px-4 py-2 rounded-md text-white">
          Web Masyarakat No.1 Di Indonesia
        </h2>
        <Image src={"/brand-content.svg"} width={274} height={243} alt={"brand-content"} />
        <div className="space-x-9">
          <Button text="Buat Vote Baru" type="primary" className="font-bold" />
          <Button text="Ikutan Vote" type="secondary" className="font-bold" />
        </div>
      </div>
      <div>
        <span className="py-5 font-bold text-lg">Vote yang saya buat</span>
        <table className="table-auto w-full border border-zinc-100">
          <thead>
            <tr className="border-b border-zinc-100">
              <th className="p-5 text-left">No</th>
              <th className="p-5 text-left">Judul</th>
              <th className="p-5 text-left">Kandidat</th>
              <th className="p-5 text-left">Kode</th>
              <th className="p-5 text-left">Mulai</th>
              <th className="p-5 text-left">Selesai</th>
              <th className="p-5 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-5 text-left">1</td>
              <td className="p-5 text-left">Pemilihan Organisasi</td>
              <td className="p-5 text-left">Budi VS Anto</td>
              <td className="p-5 text-left">BXAIZH</td>
              <td className="p-5 text-left">20 Oct 2022 11:00 AM</td>
              <td className="p-5 text-left">22 Oct 2022 11:00 AM</td>
              <td className="p-5 text-left">
                <div className="flex flex-row">
                  <a href="/create">
                    <LinkIcon className="w-8 h-8 p-2 hover:bg-zinc-100" />
                  </a>
                  <a href="/delete">
                    <TrashIcon className="w-8 h-8 p-2 hover:bg-zinc-100" />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
