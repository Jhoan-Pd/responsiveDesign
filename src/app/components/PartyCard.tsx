interface PartyCardProps {
  title: string;
  subtitle: string;
  image: string;
  users: string[];
}

export default function PartyCard({ title, subtitle, image, users }: PartyCardProps) {
  return (
    <div className="flex items-center justify-between bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer p-4 w-full md:w-[240px] h-auto md:h-[100px]">
      {/* Texto */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <p className="font-semibold text-gray-900 text-sm md:text-base leading-tight">
            {title}
          </p>
          <p className="text-xs md:text-sm text-gray-500">{subtitle}</p>
        </div>

        {/* Avatares */}
        <div className="flex mt-2">
          {users.map((user, i) => (
            <img
              key={i}
              src={user}
              alt={`user-${i}`}
              className="w-5 h-5 rounded-full border-2 border-white -ml-1 first:ml-0"
            />
          ))}
        </div>
      </div>

      {/* Imagen paisaje */}
      <div className="ml-3">
        <img
          src={image}
          alt={title}
          className="w-20 h-20 md:w-16 md:h-16 rounded-xl object-cover"
        />
      </div>
    </div>
  );
}
