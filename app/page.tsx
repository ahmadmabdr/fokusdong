import Link from "next/link";
import { FeatureCard } from "@/components/ui/feature-card";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-4xl flex-1 flex-col items-center gap-16 px-6 py-24 text-center">
        <div className="flex flex-col items-center gap-6">
          <span className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            fokusdong
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-zinc-50">
            Persiapan UTBK Lebih Fokus, Lebih Terarah
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Latihan soal UTBK dengan kuis interaktif dan progres yang mudah dipantau — semua di
            satu tempat.
          </p>
          <Link
            href="/library"
            className="flex h-12 items-center justify-center rounded-lg bg-zinc-900 px-6 text-base font-medium text-white transition-colors hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200 dark:focus-visible:ring-white"
          >
            Mulai Latihan
          </Link>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-3">
          <FeatureCard
            title="Latihan Terarah"
            description="Kumpulan soal disusun per topik supaya latihanmu lebih fokus."
          />
          <FeatureCard
            title="Beragam Kuis"
            description="Pilih kuis sesuai kebutuhan dan tingkatkan pemahamanmu."
          />
          <FeatureCard
            title="Progres Jelas"
            description="Pantau soal mana yang sudah dan belum kamu kerjakan."
          />
        </div>
      </main>
    </div>
  );
}
