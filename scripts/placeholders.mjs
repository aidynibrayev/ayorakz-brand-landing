// Generates warm placeholder product photos (webp) until real photos arrive.
// Usage: node scripts/placeholders.mjs   — skips files that already exist.
import { mkdir, access } from "node:fs/promises";
import sharp from "sharp";

const W = 1080;
const H = 1350;

const items = {
  "heater-2in1": ["Обогреватель 2в1", "В интерьере", "Пульт ДУ", "Увлажнитель"],
  humidifier: ["Увлажнитель", "В интерьере"],
  kettle: ["Электрочайник", "На кухне"],
};

const tones = [
  ["#E9DCCB", "#C9B49A"],
  ["#EFE4D6", "#D2BFA7"],
  ["#E4D5C2", "#BFA88C"],
  ["#F0E6DA", "#D8C5AE"],
];

function svg(label, i) {
  const [a, b] = tones[i % tones.length];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.38" r="0.45"><stop offset="0" stop-color="#F7B267" stop-opacity="0.55"/><stop offset="1" stop-color="#F7B267" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <rect x="290" y="250" width="500" height="560" rx="40" fill="#1C1C1C" opacity="0.88"/>
  <rect x="330" y="300" width="420" height="300" rx="20" fill="#2a2522"/>
  <path d="M440 560c-20-60 40-80 30-150 50 40 90 80 70 150z M520 560c-10-40 30-60 25-110 40 35 60 70 45 110z" fill="#F08A3C" opacity="0.9"/>
  <text x="540" y="1010" font-family="Helvetica, Arial, sans-serif" font-size="56" font-weight="700" fill="#1C1C1C" text-anchor="middle">${label}</text>
  <text x="540" y="1080" font-family="Helvetica, Arial, sans-serif" font-size="34" fill="#1C1C1C" opacity="0.5" text-anchor="middle">TODO: фото товара</text>
</svg>`;
}

for (const [slug, labels] of Object.entries(items)) {
  await mkdir(`public/products/${slug}`, { recursive: true });
  for (const [i, label] of labels.entries()) {
    const out = `public/products/${slug}/${i + 1}.webp`;
    try {
      await access(out);
      continue;
    } catch {}
    await sharp(Buffer.from(svg(label, i))).webp({ quality: 72 }).toFile(out);
    console.log("wrote", out);
  }
}
