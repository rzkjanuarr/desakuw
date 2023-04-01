import Head from "next/head";
import Menu from "../components/Menu";

export default function VotingDetails() {
  return (
    <div>
      <div>
        <Head>
          <title>Voting Details</title>
        </Head>
      </div>
      <Menu />
      <div className="min-h-screen space-y-4 flex justify-center items-center flex-col">
        <h1 className="font-bold text-4xl">Pemilihan Ketua Kepala Desa</h1>
        <h2 className="font-medium text-2xl">Voting Sedang Berlangsung</h2>
        <h3 className="font-bold text-6xl">01 : 21 : 59</h3>
        <h4 className="font-medium text-2xl">Jam  : Menit   : Detik</h4>
      </div>
    </div>
  )
}
