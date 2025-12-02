import "./App.css";
import Navbar from "@/components/Navbar";
import { Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { sendHeartbeat } from "@/services/weatherService"

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  let [latitude, setLatitude] = useState<number>(-23.550520);
  let [longitude, setLongitude] = useState<number>(-46.633308);
  const [mock, setMock] = useState<boolean>(true);
  const heartbeatDelayMilis: number = 180000;
  
  useEffect(() => {
	  setInterval(() => {
		 sendHeartbeat();
	  }, heartbeatDelayMilis);
  }, []);

	useEffect(() => {
		if(mock) return;

		navigator.geolocation.getCurrentPosition(
			(position) => {
				setLatitude(position.coords.latitude);
				setLongitude(position.coords.longitude);
			},
			(error) => {
				setGeoError("Could not get coordinates");
			}
		)
	}, []);

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
		<Outlet context={{latitude, longitude, mock, setMock}} />
      </main>
    </>
  );
}

export default App;
