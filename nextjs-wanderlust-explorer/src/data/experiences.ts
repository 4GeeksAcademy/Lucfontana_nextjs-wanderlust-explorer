export type ExperienceCategory =
  | "Adventure"
  | "Culture"
  | "Food"
  | "Wellness"
  | "Nature";

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: ExperienceCategory;
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const categories: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

const titleSeeds = [
  "Tour gastronomico en mercados locales",
  "Ruta de vela por costas historicas",
  "Retiro de bienestar frente al mar",
  "Caminata en senderos volcanicos",
  "Clase de cocina con chefs locales",
  "Expedicion de kayak al amanecer",
  "Recorrido de arte y arquitectura",
  "Sabores nocturnos de la ciudad",
  "Meditacion y termas naturales",
  "Safari fotografico en reserva natural",
  "Aventura en bici por pueblos coloniales",
  "Navegacion entre islas escondidas",
  "Experiencia de cafe y cacao",
  "Senderismo panoramico en montana",
  "Taller artesanal con comunidad local",
  "Escapada de yoga y spa",
  "Tour de street food y mercados",
  "Aventura 4x4 por dunas doradas",
  "Ruta de templos y patrimonio",
  "Exploracion de arrecifes tropicales",
  "Circuito de musica y cultura viva",
  "Degustacion premium de cocina regional",
  "Paseo ecologico por humedales",
  "Travesia en tren entre paisajes iconicos",
  "Jornada de snorkel y playas secretas",
];

const destinationSeeds = [
  "Bangkok, Tailandia",
  "Dubrovnik, Croacia",
  "Cusco, Peru",
  "Mendoza, Argentina",
  "Lisboa, Portugal",
  "Kioto, Japon",
  "Reikiavik, Islandia",
  "Atenas, Grecia",
  "Marrakech, Marruecos",
  "Cartagena, Colombia",
  "Queenstown, Nueva Zelanda",
  "Copenhague, Dinamarca",
  "Ciudad del Cabo, Sudafrica",
  "Napoles, Italia",
  "Sevilla, Espana",
  "Bali, Indonesia",
  "Split, Croacia",
  "San Jose, Costa Rica",
  "Riviera Maya, Mexico",
  "Valle de Uco, Argentina",
];

const descriptionSeeds = [
  "Una experiencia inmersiva para descubrir historias, sabores y rincones que no aparecen en las guias tradicionales.",
  "Ideal para quienes buscan combinar aventura suave con comodidad, conectando con la cultura local de forma autentica.",
  "Incluye actividades guiadas, tiempos libres y recomendaciones curadas para sacar el maximo provecho del destino.",
  "Disenada para viajeros curiosos, con enfoque en bienestar, seguridad y experiencias memorables durante todo el recorrido.",
  "Perfecta para parejas, amigos o familias que desean explorar con ritmo equilibrado entre descubrimiento y descanso.",
];

const imageSeeds = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
];

export const experienceCategories = categories;

export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
  const titleBase = titleSeeds[index % titleSeeds.length];
  const destination = destinationSeeds[index % destinationSeeds.length];
  const category = categories[index % categories.length];
  const description = descriptionSeeds[index % descriptionSeeds.length];
  const imageUrl = imageSeeds[index % imageSeeds.length];

  return {
    id: `exp-${String(index + 1).padStart(3, "0")}`,
    title: `${titleBase} ${index + 1}`,
    description,
    category,
    destination,
    price: 680 + (index % 14) * 95,
    rating: Number((3.8 + (index % 12) * 0.1).toFixed(1)),
    imageUrl,
  };
});

export const experienceDestinations = Array.from(
  new Set(experiences.map((experience) => experience.destination)),
);
