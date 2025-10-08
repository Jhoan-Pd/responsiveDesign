export default function Circles() {
  const users = [
    "/user1.jpg",
    "/user2.jpg",
    "/user3.jpg",
    "/user4.jpg",
    "/user5.jpeg",
  ];

  return (
    //fixed + z-50 para estar por encima del contenido; oculto en móvil con hidden md:flex
    <div className="hidden md:flex flex-col items-center gap-4 fixed right-6 top-[35%] z-50">
      {users.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`user-${i}`}
          className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-200 cursor-pointer"
        />
      ))}
    </div>
  );
}
