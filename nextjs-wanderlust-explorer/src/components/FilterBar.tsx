"use client";

import { useEffect, useRef, useState } from "react";
import type { ExperienceCategory } from "@/data/experiences";

interface DropdownFilterProps {
  label: string;
  values: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
  ariaLabel: string;
}

function DropdownFilter({
  label,
  values,
  selectedValue,
  onSelect,
  ariaLabel,
}: DropdownFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className={`h-12 w-full rounded-xl border px-3 text-left text-sm font-semibold transition ${
          isOpen || selectedValue
            ? "border-orange-500 bg-orange-500 text-white"
            : "border-black/15 bg-white text-black hover:bg-orange-100"
        }`}
        aria-label={ariaLabel}
        aria-expanded={isOpen}
      >
        <span className="truncate pr-5">{selectedValue || label}</span>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs">
          v
        </span>
      </button>

      {isOpen ? (
        <ul
          role="listbox"
          aria-label={ariaLabel}
          className="absolute z-20 mt-2 max-h-72 w-full overflow-auto rounded-xl border border-black/15 bg-white p-1 shadow-lg"
        >
          <li>
            <button
              type="button"
              className="w-full rounded-lg px-3 py-2 text-left text-sm text-black hover:bg-orange-100"
              onClick={() => {
                onSelect("");
                setIsOpen(false);
              }}
            >
              Todos
            </button>
          </li>
          {values.map((value) => (
            <li key={value}>
              <button
                type="button"
                className="w-full rounded-lg px-3 py-2 text-left text-sm text-black hover:bg-orange-100"
                onClick={() => {
                  onSelect(value);
                  setIsOpen(false);
                }}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

interface FilterBarProps {
  categories: ExperienceCategory[];
  destinations: string[];
  selectedCategory: ExperienceCategory | "";
  selectedDestination: string;
  onCategoryChange: (value: ExperienceCategory | "") => void;
  onDestinationChange: (value: string) => void;
}

export function FilterBar({
  categories,
  destinations,
  selectedCategory,
  selectedDestination,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <DropdownFilter
        label="Categorias"
        values={categories}
        selectedValue={selectedCategory}
        onSelect={(value) => onCategoryChange(value as ExperienceCategory | "")}
        ariaLabel="Filtrar por categoria"
      />
      <DropdownFilter
        label="Destinos"
        values={destinations}
        selectedValue={selectedDestination}
        onSelect={onDestinationChange}
        ariaLabel="Filtrar por destino"
      />
    </div>
  );
}
