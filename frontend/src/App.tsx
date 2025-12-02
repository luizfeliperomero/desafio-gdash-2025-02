import "./App.css";
import Navbar from "@/components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Navbar always visible, NOT wrapped by the pl-20 container */}
      <Navbar />

      {/* Content gets the left padding (only on desktop) */}
      <main className={`${isHome ? "" : "md:pl-20"}`}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
