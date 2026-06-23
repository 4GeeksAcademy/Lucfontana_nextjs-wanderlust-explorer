import Image from "next/image";
import Link from "next/link";
import { getSafeExperienceImageUrl, type Experience } from "@/data/experiences";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  const imageUrl = getSafeExperienceImageUrl(experience.imageUrl);

  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={experience.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
        />
        <button
          type="button"
          onClick={() => onToggleFavorite(experience.id)}
          className="absolute right-3 top-3 rounded-full bg-white/95 p-2 shadow"
          aria-label={isFavorite ? "Quitar de favoritos" : "Anadir a favoritos"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`h-5 w-5 ${isFavorite ? "fill-orange-500" : "fill-none"}`}
            stroke={isFavorite ? "#f97316" : "#111827"}
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M12 20.25c-.25 0-.49-.08-.7-.23C8.43 18.05 3.75 14.33 3.75 9.75c0-2.9 2.35-5.25 5.25-5.25 1.44 0 2.81.58 3.83 1.6 1.02-1.02 2.39-1.6 3.83-1.6 2.9 0 5.25 2.35 5.25 5.25 0 4.58-4.68 8.3-7.55 10.27-.21.15-.45.23-.7.23Z" />
          </svg>
        </button>
      </div>

      <div className="space-y-3 p-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
          Desde USD {experience.price}
        </p>
        <h3 className="line-clamp-2 text-lg font-extrabold text-black">
          {experience.title}
        </h3>
        <p className="text-sm text-black/70">{experience.destination}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-black">
            Rating {experience.rating}/5
          </p>
          <Link
            href={`/experiences/${experience.id}`}
            className="text-sm font-bold text-orange-600 hover:text-orange-700"
          >
            Ver paquete
          </Link>
        </div>
      </div>
    </article>
  );
}
