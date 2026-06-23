"use client";

import { useFavorites } from "@/context/FavoritesContext";

export default function ProfilePage() {
  const { favoriteCount } = useFavorites();

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-4xl font-black uppercase tracking-[0.08em] text-black">
          Perfil
        </h1>
        <p className="mt-3 text-black/70">
          Informacion simulada del usuario para el MVP de Wanderlust Labs.
        </p>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-orange-50 p-4">
            <dt className="text-sm font-semibold text-black/70">Nombre</dt>
            <dd className="mt-1 text-xl font-bold text-black">Luca Fontana</dd>
          </div>
          <div className="rounded-2xl border border-black/10 bg-orange-50 p-4">
            <dt className="text-sm font-semibold text-black/70">Plan actual</dt>
            <dd className="mt-1 text-xl font-bold text-black">Explorer Plus</dd>
          </div>
          <div className="rounded-2xl border border-black/10 bg-orange-50 p-4">
            <dt className="text-sm font-semibold text-black/70">Pais base</dt>
            <dd className="mt-1 text-xl font-bold text-black">Argentina</dd>
          </div>
          <div className="rounded-2xl border border-black/10 bg-orange-100 p-4">
            <dt className="text-sm font-semibold text-black/70">Favoritos guardados</dt>
            <dd className="mt-1 text-3xl font-black text-orange-600">
              {favoriteCount}
            </dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
