import Link from "next/link";

export function HomeHero() {
  return (
    <main className="relative isolate overflow-hidden">
      <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.42em] text-[#d18f3c]">
              Wanderlust Labs
            </p>
            <h1 className="max-w-3xl font-mono text-5xl font-bold uppercase leading-[0.95] tracking-[0.04em] text-[#e58f24] sm:text-6xl lg:text-7xl">
              Paquetes para explorar el mundo con mirada local
            </h1>
            <p className="max-w-2xl text-base leading-8 text-black/72 sm:text-lg">
              Curamos experiencias memorables con una estetica inspirada en el viaje clasico:
              destinos fascinantes, detalles humanos y un explorador digital simple de usar.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/experiences"
                className="inline-flex items-center justify-center rounded-full bg-[#f59b2f] px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_16px_40px_rgba(245,155,47,0.28)] transition hover:bg-[#ea8d1d]"
              >
                Ver todos los paquetes
              </Link>
              <Link
                href="/favorites"
                className="inline-flex items-center justify-center rounded-full border border-[#e5c08b] bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#fff5e8]"
              >
                Mis favoritos
              </Link>
            </div>
          </div>

          <article className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white p-4 shadow-[0_20px_70px_rgba(32,20,8,0.12)]">
            <div className="relative h-[320px] overflow-hidden rounded-[1.5rem] sm:h-[420px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')",
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />
              <div className="absolute left-5 top-6 max-w-xs rotate-[-3deg] rounded-sm bg-white p-5 shadow-xl sm:left-8 sm:top-10">
                <p className="font-mono text-lg font-bold leading-tight text-[#ef9529]">
                  Porque viajar de a dos siempre es mejor...
                </p>
                <h2 className="mt-2 text-4xl font-black uppercase leading-none text-black">
                  Circuitos 2x1
                </h2>
                <p className="mt-1 text-lg leading-6 text-black/75">
                  Turquia, Egipto, Dubai y mas.
                </p>
                <Link
                  href="/experiences?category=Culture"
                  className="mt-5 inline-flex rounded-sm bg-[#f59b2f] px-5 py-3 text-base font-black uppercase tracking-[0.08em] text-white transition hover:bg-[#ea8d1d]"
                >
                  Conocelos aca
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}