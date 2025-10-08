interface CardGridProps {
  title: string;
  items: { name: string; subtitle?: string; image: string }[];
}

export default function CardGrid({ title, items }: CardGridProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>

      {/* Grid de cards responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 cursor-pointer"
          >
            {/* Imagen */}
            <div className="relative w-full h-40 md:h-44">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Contenido */}
            <div className="p-4 flex flex-col justify-between h-[90px]">
              <p className="font-semibold text-gray-900 text-sm md:text-base leading-tight">
                {item.name}
              </p>
              {item.subtitle && (
                <p className="text-xs text-gray-500 mt-1">{item.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
