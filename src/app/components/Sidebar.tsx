export default function Sidebar() {
  return (
    // NOTA: no usar "fixed" aquí. Usar sticky o el flujo normal del grid.
    <nav className="h-full p-6 bg-white border-r border-gray-100 min-h-screen sticky top-0">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-red-600">Netflix</h2>
      </div>

      <ul className="flex flex-col gap-4 text-gray-700">
        <li><a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100" href="#">Browse</a></li>
        <li><a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100" href="#">Watchlist</a></li>
        <li><a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100" href="#">Coming soon</a></li>
        <li><a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100" href="#">Friends</a></li>
        <li><a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100" href="#">Parties</a></li>
      </ul>
    </nav>
  );
}
