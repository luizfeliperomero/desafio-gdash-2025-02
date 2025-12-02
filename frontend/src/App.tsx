import "./App.css";
import Navbar from "@/components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";


  useEffect(() => {
	  let theme = localStorage.getItem("theme");

	  if (!theme) {
		theme = "light";
		localStorage.setItem("theme", "light");
	  }

	  document.body.classList.remove("light", "dark");
	  document.body.classList.add(theme);
	}, []);

  return (
    <>
      <Navbar />
      <main className={`${isHome ? "" : "md:pl-20"}`}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
