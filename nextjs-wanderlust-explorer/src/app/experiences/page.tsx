import { Suspense } from "react";
import { ExperiencesPageContent } from "@/components/ExperiencesPageContent";

export default function ExperiencesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <Suspense
        fallback={
          <section className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
                Wanderlust Labs
              </p>
              <h1 className="text-4xl font-black uppercase tracking-[0.06em] text-black sm:text-5xl">
                Paquetes
              </h1>
            </div>
            <div className="rounded-xl border border-dashed border-black/20 bg-white p-8 text-center font-semibold text-black">
              Cargando experiencias...
            </div>
          </section>
        }
      >
        <ExperiencesPageContent />
      </Suspense>
    </main>
  );
}
