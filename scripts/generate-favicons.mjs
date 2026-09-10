/**
 * Genera favicons circulares desde src/assets/logo/perfil-1024.jpg
 *
 * Uso: node scripts/generate-favicons.mjs
 *
 * Requiere: sharp, sharp-ico (ya instalados como dependencias del proyecto)
 * Genera archivos en public/:
 *   favicon.ico, favicon.svg, favicon-16x16.png, favicon-32x32.png,
 *   favicon-48x48.png, apple-touch-icon.png
 */

import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { sharpsToIco } from 'sharp-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SOURCE = resolve(ROOT, 'src/assets/logo/perfil-1024.jpg');
const OUT = resolve(ROOT, 'public');

const SIZES = [16, 32, 48];
const APPLE_SIZE = 180;

/**
 * Crea un buffer SVG con una máscara circular del tamaño dado.
 * La máscara blanca = visible, negro = transparente.
 */
function circularMask(size) {
  const r = size / 2;
  return Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${r}" cy="${r}" r="${r}" fill="white"/>
    </svg>`
  );
}

async function generate() {
  console.log(' source:', SOURCE);

  const srcBuffer = await readFile(SOURCE);

  // --- PNG favicons (circulares) ---
  for (const size of SIZES) {
    const mask = circularMask(size);
    const out = resolve(OUT, `favicon-${size}x${size}.png`);
    await sharp(srcBuffer)
      .resize(size, size, { fit: 'cover' })
      .ensureAlpha()
      .composite([{ input: mask, blend: 'dest-in' }])
      .png()
      .toFile(out);
    console.log(' created:', `favicon-${size}x${size}.png`);
  }

  // --- Apple touch icon (circular) ---
  {
    const mask = circularMask(APPLE_SIZE);
    const out = resolve(OUT, 'apple-touch-icon.png');
    await sharp(srcBuffer)
      .resize(APPLE_SIZE, APPLE_SIZE, { fit: 'cover' })
      .ensureAlpha()
      .composite([{ input: mask, blend: 'dest-in' }])
      .png()
      .toFile(out);
    console.log(' created: apple-touch-icon.png');
  }

  // --- ICO multi-size ---
  {
    const pngBufs = await Promise.all(
      SIZES.map(async (size) => {
        const mask = circularMask(size);
        return sharp(srcBuffer)
          .resize(size, size, { fit: 'cover' })
          .ensureAlpha()
          .composite([{ input: mask, blend: 'dest-in' }])
          .png()
          .toBuffer();
      })
    );
    // Create fresh Sharp instances from the PNG buffers
    const icoImages = pngBufs.map((buf) => sharp(buf));
    const out = resolve(OUT, 'favicon.ico');
    await sharpsToIco(icoImages, out);
    console.log(' created: favicon.ico');
  }

  // --- SVG con imagen raster embebida ---
  {
    // Usamos la versión 48x48 como base para el SVG
    const mask = circularMask(48);
    const pngBuf = await sharp(srcBuffer)
      .resize(48, 48, { fit: 'cover' })
      .ensureAlpha()
      .composite([{ input: mask, blend: 'dest-in' }])
      .png()
      .toBuffer();

    const b64 = pngBuf.toString('base64');
    const svg = `<svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,${b64}" width="48" height="48"/>
</svg>`;
    const out = resolve(OUT, 'favicon.svg');
    await writeFile(out, svg, 'utf-8');
    console.log(' created: favicon.svg');
  }

  console.log('\nDone — all favicons are circular.');
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
