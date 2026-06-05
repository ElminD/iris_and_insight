import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, '..', 'src', 'assets', 'images');

const configs = [
  { input: 'scenic/Horses in pasture.jpg',     width: 900,  quality: 85 },
  { input: 'horses/Cat.jpg',                   width: 800,  quality: 80 },
  { input: 'horses/Ginny.jpg',                 width: 800,  quality: 80 },
  { input: 'horses/Grey.jpg',                  width: 800,  quality: 80 },
  { input: 'horses/Boomer_JR.jpg',             width: 800,  quality: 80 },
  { input: 'horses/Bodie the Goatie.jpg',      width: 800,  quality: 80 },
  { input: 'people/Kelsey Finch.jpg',          width: 300,  quality: 85 },
  { input: 'people/Sareena.jpg',               width: 300,  quality: 85 },
  { input: 'Logo.png',                         width: null, quality: 90 },
  { input: 'OK-Corral-Series-logo.png',        width: null, quality: 90 },
];

for (const { input, width, quality } of configs) {
  const inputPath  = join(assetsDir, input);
  const ext        = extname(input);
  const outputPath = inputPath.replace(ext, '.webp');

  const pipeline = sharp(inputPath);
  if (width) pipeline.resize(width, null, { withoutEnlargement: true });
  pipeline.webp({ quality });

  await pipeline.toFile(outputPath);

  const [before, after] = await Promise.all([stat(inputPath), stat(outputPath)]);
  const saved = ((1 - after.size / before.size) * 100).toFixed(0);
  console.log(`${input}  ${(before.size / 1024).toFixed(0)} KB → ${(after.size / 1024).toFixed(0)} KB  (${saved}% smaller)`);
}
