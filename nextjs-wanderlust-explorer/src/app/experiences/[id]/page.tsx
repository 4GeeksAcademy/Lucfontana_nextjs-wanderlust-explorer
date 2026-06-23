"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";

export default function ExperienceDetailPage() {
  const params = useParams<{ id: string }>();
  const experience = experiences.find((item) => item.id === params.id);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (!experience) {
      document.title = "Experiencia no encontrada | Wanderlust Labs";
      return;
    }

    document.title = `${experience.title} | Wanderlust Labs`;
  }, [experience]);

  if (!experience) {
    return (
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6">
        <section className="rounded-2xl border border-black/10 bg-white p-8 text-center">
          <h1 className="text-3xl font-black text-black">No encontrada</h1>
          <p className="mt-3 text-black/70">
            La experiencia solicitada no existe o fue removida.
          </p>
          <Link
            href="/experiences"
            className="mt-6 inline-block rounded-xl bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
          >
            Volver al explorador
          </Link>
        </section>
      </main>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: experience.title,
    description: experience.description,
    image: experience.imageUrl,
    category: experience.category,
    brand: {
      "@type": "Brand",
      name: "Wanderlust Labs",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: experience.rating,
      reviewCount: 124,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: experience.price,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="grid gap-8 rounded-3xl border border-black/10 bg-white p-4 shadow-sm md:grid-cols-2 md:p-6">
        <div className="relative h-80 w-full md:h-full">
          <Image
          src={experience.imageUrl}
          alt={experience.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-2xl object-cover"
          />
        </div>

        <article>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            {experience.category}
          </p>
          <h1 className="mt-2 text-3xl font-black text-black sm:text-4xl">
            {experience.title}
          </h1>
          <p className="mt-3 text-black/70">{experience.description}</p>

          <dl className="mt-6 space-y-3 text-black">
            <div className="flex items-center justify-between border-b border-black/10 pb-3">
              <dt className="font-semibold">Destino</dt>
              <dd>{experience.destination}</dd>
            </div>
            <div className="flex items-center justify-between border-b border-black/10 pb-3">
              <dt className="font-semibold">Precio</dt>
              <dd className="font-extrabold text-orange-600">USD {experience.price}</dd>
            </div>
            <div className="flex items-center justify-between border-b border-black/10 pb-3">
              <dt className="font-semibold">Rating</dt>
              <dd>{experience.rating}/5</dd>
            </div>
          </dl>

          <button
            type="button"
            onClick={() => toggleFavorite(experience.id)}
            className={`mt-8 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold transition ${
              isFavorite(experience.id)
                ? "bg-orange-100 text-orange-700"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
            aria-label={
              isFavorite(experience.id)
                ? "Quitar de favoritos"
                : "Anadir a favoritos"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`h-5 w-5 ${isFavorite(experience.id) ? "fill-orange-500" : "fill-none"}`}
              stroke={isFavorite(experience.id) ? "#f97316" : "#ffffff"}
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="M12 20.25c-.25 0-.49-.08-.7-.23C8.43 18.05 3.75 14.33 3.75 9.75c0-2.9 2.35-5.25 5.25-5.25 1.44 0 2.81.58 3.83 1.6 1.02-1.02 2.39-1.6 3.83-1.6 2.9 0 5.25 2.35 5.25 5.25 0 4.58-4.68 8.3-7.55 10.27-.21.15-.45.23-.7.23Z" />
            </svg>
            {isFavorite(experience.id) ? "Guardada en favoritos" : "Guardar en favoritos"}
          </button>
        </article>
      </section>
    </main>
  );
}
