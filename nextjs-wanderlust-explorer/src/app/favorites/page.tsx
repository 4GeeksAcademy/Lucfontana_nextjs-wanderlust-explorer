"use client";

import { ExperienceCard } from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";

export default function FavoritesPage() {
  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();

  const favoriteExperiences = experiences.filter((experience) =>
    favoriteIds.includes(experience.id),
  );

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-8">
        <h1 className="text-4xl font-black uppercase tracking-[0.08em] text-black">
          Favoritos
        </h1>
        <p className="mt-2 text-black/70">
          Guarda y revisa rapidamente tus experiencias preferidas.
        </p>
      </section>

      {favoriteExperiences.length === 0 ? (
        <p
          role="status"
          aria-live="polite"
          className="rounded-xl border border-dashed border-black/20 bg-white p-8 text-center font-semibold text-black"
        >
          Aun no tienes experiencias guardadas en favoritos.
        </p>
      ) : (
        <section aria-label="Lista de experiencias favoritas">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {favoriteExperiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                isFavorite={isFavorite(experience.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
