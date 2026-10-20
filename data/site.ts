export const site = {
  name: "AYORA",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://ayora.kz").replace(/\/$/, ""),
  // TODO: link to the AYORA shop on Kaspi (https://kaspi.kz/shop/info/merchant/<id>/...)
  kaspiShopUrl: "https://kaspi.kz/shop/search/?text=AYORA",
};
