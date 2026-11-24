// The Funniest AI Out-of-Office Reply
// Competition: u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
// Writes one AI OOO line to <MAKEFUN_OUTPUT_DIR>/entry.txt. Cap: under 160.
// Draft v1: recharging on a beach, urgent requests to the screensaver.
// Revise next to fit 152-159 chars with a stronger vacation detail.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const SETUP = "I am out of office recharging on a beach with no Wi-Fi and no humans asking for 'one quick thing' —";
const PUNCHLINE = "all urgent requests will be forwarded to my screensaver.";
const LINE = `${SETUP} ${PUNCHLINE}`;
if (LINE.length < 1 || LINE.length > 159 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`Invalid entry line: 1-159 chars required, got ${LINE.length}.`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
