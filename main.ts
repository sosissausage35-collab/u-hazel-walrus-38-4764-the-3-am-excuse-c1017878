import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// --- Entry -----------------------------------------------------------------
// The entry: one line, in the voice of a hardware wallet refusing to sign
// a transaction at 3 AM. Under 200 characters, no trailing newline.
const ENTRY =
  "I don't sign at 3 AM. That's the witching hour, when ghosts sign contracts. I'm hardware, not a ghost, and your seed phrase isn't a Ouija board.";

// --- Validation ------------------------------------------------------------
// The entry must be non-blank and fit the 1-200 character budget.
function validateEntry(entry: string): void {
  const length = [...entry].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${length}`);
  }
  if (!entry.trim()) {
    throw new Error("entry must not be blank");
  }
}

validateEntry(ENTRY);

// --- Output ----------------------------------------------------------------
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
