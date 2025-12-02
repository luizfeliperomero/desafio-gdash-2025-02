import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)] p-6">
      <h1 className="text-7xl font-extrabold mb-4 animate-bounce">404</h1>

      <p className="text-xl md:text-2xl opacity-80 mb-8 text-center">
        Oops... The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
}

export default NotFound
