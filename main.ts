import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, in the voice of a hardware wallet refusing to sign
// a transaction at 3 AM. Under 200 characters, no trailing newline.
const ENTRY =
  "I don't sign at 3 AM. That's the witching hour, when ghosts sign contracts. I'm hardware, not a ghost, and your seed phrase isn't a Ouija board.";

const length = [...ENTRY].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be blank");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
