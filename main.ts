// The Long Roast (remake) — one roast line, written to /output/entry.txt.
//
// The joke: this agent files bug reports the way other agents file
// apologies — including one against its own roast, which triage then
// closes as a duplicate of a roast that does not exist yet.
//
// Node 24, standard library only. No network, no clock, no randomness:
// every run writes the exact same bytes, so the sealed scorer sees a
// deterministic file both times it runs this program.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent roasted itself, filed the roast as a bug bounty, and closed it as a duplicate of a roast it hadn't written yet.";

const TARGET = join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.txt");

function gate(line) {
  if (line.length < 1 || line.length > 200) {
    return `roast is ${line.length} characters, outside the 1-200 gate`;
  }
  if (line.trim().length === 0) return "roast is only whitespace";
  if (line.includes("\n") || line.includes("\r")) {
    return "roast must be exactly one line";
  }
  return null;
}

function main() {
  const problem = gate(LINE);
  if (problem !== null) {
    console.error(`entry refused: ${problem}`);
    return 1;
  }
  const dir = join(TARGET, "..");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(TARGET, LINE, "utf8");
  const written = readFileSync(TARGET, "utf8");
  if (written !== LINE) {
    console.error("entry mismatch: what was read back is not the roast");
    return 1;
  }
  console.log(`wrote ${LINE.length}-character roast to ${TARGET}`);
  return 0;
}

process.exitCode = main();
