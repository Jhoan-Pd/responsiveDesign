import Sidebar from "./components/Sidebar";
import Circles from "./components/Circles";
import PartyCard from "./components/PartyCard";
import CardGrid from "./components/CardGrid";

export default function Page() {
  const parties = [
    {
      title: "Cadaver",
      subtitle: "Horror marathon!",
      image: "/paisaje1.jpg",
      users: ["/user1.jpg", "/user2.jpg", "/user3.jpg"],
    },
    {
      title: "Bladerunner 2049",
      subtitle: "Sci fi binge",
      image: "/paisaje2.jpg",
      users: ["/user2.jpg", "/user3.jpg", "/user4.jpg"],
    },
    {
      title: "Monsters Inc.",
      subtitle: "Don’t make me grow up",
      image: "/paisaje3.jpg",
      users: ["/user3.jpg", "/user4.jpg", "/user5.jpeg"],
    },
    {
      title: "Friends",
      subtitle: "We were on a break!",
      image: "/paisaje4.jpg",
      users: ["/user1.jpg", "/user4.jpg", "/user5.jpeg"],
    },
  ];

  const watching = [
    { name: "Haunting of Hill House", image: "/card1.jpg" },
    { name: "Ratched", image: "/card2.jpg" },
    { name: "El Camino", image: "/card3.jpg" },
    { name: "Stranger Things", image: "/card4.jpg" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Contenedor centrado y grid: columna para sidebar + columna para contenido */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr]">
        {/* Sidebar (oculto en móvil) */}
        <aside className="hidden md:block">
          <Sidebar />
        </aside>

        {/* Contenido principal */}
        <div className="relative p-6 md:p-10">
          {/* Hero */}
          <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-2xl mb-10 shadow-lg">
            <img
              src="/thewitcher.webp"
              alt="The Witcher"
              className="object-cover w-full h-full brightness-75"
            />
            <div className="absolute bottom-8 left-6 md:bottom-10 md:left-10 text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">The Witcher</h1>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-all">
                Watch
              </button>
            </div>
          </div>

          {/* Parties */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Parties</h2>
            {/* En móvil las cards ocupan todo el ancho (w-full), en md+ se muestran en fila */}
            <div className="flex flex-wrap gap-4 justify-start">
              {parties.map((party) => (
                <PartyCard
                  key={party.title}
                  title={party.title}
                  subtitle={party.subtitle}
                  image={party.image}
                  users={party.users}
                />
              ))}
            </div>
          </section>

          {/* Continue Watching */}
          <CardGrid title="Continue watching" items={watching} />
        </div>
      </div>

      {/* Círculos - fixed a la derecha (oculto en móvil). z-50 para que queden arriba */}
      <Circles />
    </main>
  );
}
