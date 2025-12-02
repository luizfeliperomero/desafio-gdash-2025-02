import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { NavLink, Outlet, useLocation } from "react-router-dom"
import { Home, ChartNoAxesCombined } from "lucide-react"
import { useState, useEffect } from "react";
import { Moon, Sun, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.body.classList.remove("light", "dark");
    document.body.classList.add(newTheme);
  }

  return (
	    <nav
      className="
  fixed z-50 bg-[var(--navbar-bg)] p-3 flex
  bottom-0 left-0 w-full h-16 flex-row justify-between justify-around items-center
  md:top-0 md:left-0 md:w-20 md:h-full md:flex-col md:items-center
"
      aria-label="Main navigation"
    >
	<img src="logo.png" alt="Logo" className="h-10 w-auto md:h-16 object-contain" />
      <NavigationMenu>
        <NavigationMenuList className="flex md:flex-col gap-10 items-center">
          <NavigationMenuItem className="p-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[var(--active)] scale-110 cursor-pointer" : "text-white hover:text-[var(--hover)] hover:scale-110 cursor-pointer"
              }
            >
              <Home />
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="p-3">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-[var(--active)] scale-110 cursor-pointer" : "text-white hover:text-[var(--hover)] hover:scale-110 cursor-pointer"
              }
            >
              <ChartNoAxesCombined />
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
	  <div className="flex md:flex-col gap-3">
		  <NavLink to="/settings"
              className={({ isActive }) =>
                isActive ? "text-[var(--active)] scale-110 cursor-pointer" : "hover:text-[var(--hover)] hover:scale-110 cursor-pointer"
              }
		  >
			  <Button className="cursor-pointer" variant="outline" size="icon">
				<Settings />
			  </Button>
		  </NavLink>
		  <Button onClick={toggleTheme} className="cursor-pointer" variant="outline" size="icon">
			  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
			  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
			  <span className="sr-only">Toggle theme</span>
		  </Button>
	  </div>
    </nav>
  );
}

export default Navbar;
