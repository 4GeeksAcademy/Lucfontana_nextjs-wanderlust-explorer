"use client";

import { ExperienceCard } from "@/components/ExperienceCard";
import { FilterBar } from "@/components/FilterBar";
import { SearchBar } from "@/components/SearchBar";
import {
  experienceCategories,
  experienceDestinations,
  experiences,
} from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";
import { useExperienceFilters } from "@/hooks/useExperienceFilters";

export function ExperiencesPageContent() {
  const { isFavorite, toggleFavorite } = useFavorites();
  const {
    searchTerm,
    category,
    destination,
    filteredExperiences,
    onSearchChange,
    onCategoryChange,
    onDestinationChange,
  } = useExperienceFilters(experiences);

  return (
    <>
      <section className="mb-8 rounded-3xl border border-black/10 bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_65%)] p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
          Wanderlust Labs
        </p>
        <h1 className="mt-2 text-4xl font-black uppercase tracking-[0.06em] text-black sm:text-5xl">
          Paquetes
        </h1>
        <p className="mt-3 max-w-3xl text-black/75">
          Descubre experiencias curadas para viajeros modernos. Filtra por
          categoria y destino, guarda tus favoritas y encuentra tu proxima
          aventura.
        </p>
      </section>

      <section aria-label="Controles de busqueda y filtros" className="mb-8">
        <div className="grid gap-3 md:grid-cols-10">
          <div className="md:col-span-8">
            <SearchBar value={searchTerm} onChange={onSearchChange} />
          </div>
          <div className="md:col-span-2">
            <FilterBar
              categories={experienceCategories}
              destinations={experienceDestinations}
              selectedCategory={category}
              selectedDestination={destination}
              onCategoryChange={onCategoryChange}
              onDestinationChange={onDestinationChange}
            />
          </div>
        </div>
      </section>

      <section aria-label="Resultados de experiencias">
        {filteredExperiences.length === 0 ? (
          <p
            role="status"
            aria-live="polite"
            className="rounded-xl border border-dashed border-black/20 bg-white p-8 text-center font-semibold text-black"
          >
            No se encontraron resultados para tu busqueda
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredExperiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                isFavorite={isFavorite(experience.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}