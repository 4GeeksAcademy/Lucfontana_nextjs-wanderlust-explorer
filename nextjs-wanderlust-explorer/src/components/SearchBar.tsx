interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <label htmlFor="experience-search" className="sr-only">
        Buscar experiencias por titulo
      </label>
      <input
        id="experience-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar destinos, fechas o experiencias"
        className="h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-black shadow-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
      />
    </div>
  );
}
