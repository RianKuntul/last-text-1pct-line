// Last Text at One Percent — entry program (v2).
//
// Writes a single line to /output/entry.txt: the last text message a phone
// sends at one percent battery, in the voice of the dying phone itself.
// The phone doesn't beg for a charger or make a battery pun; it uses its
// last seconds for a confession — the receipts it holds on its owner —
// then dies with the secrets. Specific, punchy, and it lands on a turn.
//
// Runner: Node 22 (`node main.ts`). Uses only erasable TypeScript syntax
// so Node's built-in type stripping runs it as-is.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The final text. The phone's last act is a confession with receipts:
// the screen time, the ex in the recents, the unsent drafts — and it
// dies with the secrets.
const ENTRY_LINE: string =
  "Before I go: your screen time today is 7 hours, your ex is in your recents, and I read every unsent draft. I die with your secrets.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

function main(): void {
  const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath: string = join(outDir, "entry.txt");

  // Read-back gate: refuse anything outside 1-200 characters, or
  // anything that is only whitespace or contains a newline.
  const length: number = [...ENTRY_LINE].length;
  if (length < MIN_CHARS || length > MAX_CHARS) {
    throw new Error(
      `entry line is ${length} characters, must be ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  if (ENTRY_LINE.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
  if (ENTRY_LINE.includes("\n")) {
    throw new Error("entry line must be a single line");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, ENTRY_LINE, "utf8");
  console.log(`wrote ${length} characters to ${outPath}`);
}

main();
