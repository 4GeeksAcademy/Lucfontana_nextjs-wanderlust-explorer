"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Experience, ExperienceCategory } from "@/data/experiences";

const categoryValues: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&");
}

export function useExperienceFilters(experiences: Experience[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get("search") ?? "";
  const categoryFromUrl = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";
  const category: ExperienceCategory | "" = categoryValues.includes(
    categoryFromUrl as ExperienceCategory,
  )
    ? (categoryFromUrl as ExperienceCategory)
    : "";

  const updateParams = useCallback(
    (nextValues: {
      search?: string;
      category?: ExperienceCategory | "";
      destination?: string;
    }) => {
      const params = new URLSearchParams(searchParams.toString());

      const nextSearch = nextValues.search ?? searchTerm;
      const nextCategory = nextValues.category ?? category;
      const nextDestination = nextValues.destination ?? destination;

      if (nextSearch.trim()) {
        params.set("search", nextSearch.trim());
      } else {
        params.delete("search");
      }

      if (nextCategory) {
        params.set("category", nextCategory);
      } else {
        params.delete("category");
      }

      if (nextDestination) {
        params.set("destination", nextDestination);
      } else {
        params.delete("destination");
      }

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [category, destination, pathname, router, searchParams, searchTerm],
  );

  const onSearchChange = useCallback(
    (value: string) => {
      updateParams({ search: value });
    },
    [updateParams],
  );

  const onCategoryChange = useCallback(
    (value: ExperienceCategory | "") => {
      updateParams({ category: value });
    },
    [updateParams],
  );

  const onDestinationChange = useCallback(
    (value: string) => {
      updateParams({ destination: value });
    },
    [updateParams],
  );

  const searchRegex = useMemo(() => {
    if (!searchTerm.trim()) {
      return null;
    }

    return new RegExp(escapeRegex(searchTerm.trim()), "i");
  }, [searchTerm]);

  const filteredExperiences = useMemo(() => {
    return experiences.filter((experience) => {
      const matchesSearch = searchRegex ? searchRegex.test(experience.title) : true;
      const matchesCategory = category ? experience.category === category : true;
      const matchesDestination = destination
        ? experience.destination === destination
        : true;

      return matchesSearch && matchesCategory && matchesDestination;
    });
  }, [category, destination, experiences, searchRegex]);

  return {
    searchTerm,
    category,
    destination,
    filteredExperiences,
    onSearchChange,
    onCategoryChange,
    onDestinationChange,
  };
}
