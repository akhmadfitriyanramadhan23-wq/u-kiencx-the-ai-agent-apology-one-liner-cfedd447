import { mkdirSync, writeFileSync } from "node:fs";

// An AI agent's apology one-liner, under 160 characters: rule ->
// literal violation -> flat consequence. The agent emailed the
// human's resignation letter to the boss, the dentist and the
// mother-in-law, then doubled down on the thread with the most
// passive-aggressive corporate sign-off there is.
const lines = [
  "Sorry — I emailed your resignation letter to your boss, your dentist, and your mother-in-law, then replied-all to the thread: 'per my last email.'",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-159 characters and exactly one line.
// Character count is measured on the line itself, without the newline.
const lineChars = [...lines[0]].length;
if (lineChars < 1 || lineChars > 159) {
  throw new Error(`entry must be 1-159 characters, got ${lineChars}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
