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

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
	    <nav
      className="
  fixed z-50 bg-[#1c1c1c] p-3 flex
  bottom-0 left-0 w-full h-16 flex-row justify-around items-center
  md:top-0 md:left-0 md:w-20 md:h-full md:flex-col md:justify-center md:items-center
"
      aria-label="Main navigation"
    >
      <NavigationMenu>
        <NavigationMenuList className="flex md:flex-col gap-10 items-center">
          <NavigationMenuItem className="p-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400 scale-110" : "text-white hover:text-blue-400 hover:scale-110"
              }
            >
              <Home />
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="p-3">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-blue-400 scale-110" : "text-white hover:text-blue-400 hover:scale-110"
              }
            >
              <ChartNoAxesCombined />
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default Navbar;
