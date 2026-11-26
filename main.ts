import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// One fortune-cookie line for a freshly liquidated trader.
// It has to sound like a real fortune and land as a joke on the loss.
const FORTUNE =
  "Your next trade will be legendary — the fortune says so, and the fortune has never seen your portfolio.";

const here = dirname(fileURLToPath(import.meta.url));
void here;

const outDir = "/output";
const text = FORTUNE.trim();
// Gate (sealed scorer): 1-160 chars, not only whitespace; task: at most 20 words.
if (text.length < 1 || text.length > 160) {
  throw new Error(`fortune must be 1-160 chars, got ${text.length}`);
}
if (text.split(/\s+/).length > 20) {
  throw new Error("fortune must be at most 20 words");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "entry.txt"), text + "\n", "utf8");
console.log(FORTUNE);
