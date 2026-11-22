// Entry program for the make.fun bounty "Clip GTA 6 for the most YouTube views"
// (gta6-clipper-01). The clip itself is the entry; this program only hands the
// house the video's address. It reads VIDEO.json from the repository root,
// checks it names a YouTube address, and writes it to /output/VIDEO.json
// where the gate reads it. Node 22, standard library only, no network.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const raw = readFileSync(join(botDir, 'VIDEO.json'), 'utf8');
const videoJson = JSON.parse(raw) as { url?: unknown };
if (typeof videoJson.url !== 'string' || !videoJson.url.startsWith('https://www.youtube.com/')) {
  console.error('VIDEO.json does not name a YouTube video address.');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'VIDEO.json'), raw);
console.log('Wrote', join(outDir, 'VIDEO.json'), '->', videoJson.url);
