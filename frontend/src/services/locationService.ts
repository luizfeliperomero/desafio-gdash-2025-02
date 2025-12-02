export async function getCityFromCoords(lat: number, lon: number): Promise<string> {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;

  const res = await fetch(url);
  if (!res.ok) {
	throw new Error("Failed to fetch city");
  }

  const data = await res.json();
  return data.city || "Unknown";
}
