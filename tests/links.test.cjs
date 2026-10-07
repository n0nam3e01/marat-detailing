const { test } = require("node:test");
const assert = require("node:assert/strict");
const { whatsappUrl, mapUrls } = require("../scripts/links.js");

test("WhatsApp encodes Cyrillic, line breaks and special characters without losing consultation context", () => {
  const message =
    "Здравствуйте, Марат!\nАвто: BMW X5 & Toyota\nУслуга: Бронеплёнка";
  const url = new URL(whatsappUrl("77078582519", message));
  assert.equal(url.host, "wa.me");
  assert.equal(url.pathname, "/77078582519");
  assert.equal(url.searchParams.get("text"), message);
  assert.throws(() => whatsappUrl("+7 707", message));
});

test("Map and route point to the studio, and an API key selects the official Embed API", () => {
  const config = {
    coordinates: { lat: 51.203063, lng: 71.358438 },
    googleMaps: { apiKey: "", placeId: "" },
  };
  const urls = mapUrls(config);
  assert.equal(
    new URL(urls.route).searchParams.get("destination"),
    "51.203063,71.358438",
  );
  assert.equal(
    new URL(urls.embed).searchParams.get("q"),
    "51.203063,71.358438",
  );
  config.googleMaps.apiKey = "test-public-key";
  config.googleMaps.placeId = "ChIJ-test";
  const embed = new URL(mapUrls(config, "kk").embed);
  assert.equal(embed.pathname, "/maps/embed/v1/place");
  assert.equal(embed.searchParams.get("key"), "test-public-key");
  assert.equal(embed.searchParams.get("q"), "place_id:ChIJ-test");
  assert.equal(embed.searchParams.get("language"), "kk");
});
