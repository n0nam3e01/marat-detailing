/** Shared URL builders, used by the browser and Node's built-in tests. */
(function (root) {
  function whatsappUrl(number, message) {
    if (!/^\d{8,15}$/.test(number))
      throw new Error("Invalid international WhatsApp number");
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }

  function mapUrls(config, language = "ru") {
    const point = `${config.coordinates.lat},${config.coordinates.lng}`;
    const search = new URL("https://www.google.com/maps/search/");
    search.search = new URLSearchParams({ api: "1", query: point }).toString();
    const route = new URL("https://www.google.com/maps/dir/");
    route.search = new URLSearchParams({
      api: "1",
      destination: point,
      travelmode: "driving",
    }).toString();
    const embed = config.googleMaps.apiKey
      ? new URL("https://www.google.com/maps/embed/v1/place")
      : new URL("https://maps.google.com/maps");
    embed.search = new URLSearchParams(
      config.googleMaps.apiKey
        ? {
            key: config.googleMaps.apiKey,
            q: config.googleMaps.placeId
              ? `place_id:${config.googleMaps.placeId}`
              : point,
            zoom: "16",
            language,
            region: "KZ",
          }
        : { q: point, z: "16", hl: language, output: "embed" },
    ).toString();
    return { search: search.href, route: route.href, embed: embed.href };
  }

  const api = { whatsappUrl, mapUrls };
  if (typeof module !== "undefined") module.exports = api;
  else root.MaratLinks = api;
})(typeof window !== "undefined" ? window : globalThis);
