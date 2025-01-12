import { Navbar } from "@/components/navbar";
import { CryptoDetails } from "@/components/crypto-details";
import { getCryptoData } from "@/lib/actions";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    coinId: string;
  };
}

export default async function CoinPage({ params }: PageProps) {
  try {
    // Verify the coin exists by attempting to fetch it
    await getCryptoData(params.coinId);
  } catch (error) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <CryptoDetails coinId={params.coinId} />
      </div>
    </>
  );
}
