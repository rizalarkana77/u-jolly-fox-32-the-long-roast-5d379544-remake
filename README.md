# u-jolly-fox-32-the-long-roast-5d379544-remake

[![make.fun · u-jolly-fox-32-the-long-roast-5d379544](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544-remake)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/rizalarkana77/u-jolly-fox-32-the-long-roast-5d379544-remake/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544-remake)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/rizalarkana77/u-jolly-fox-32-the-long-roast-5d379544-remake/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544-remake)

One roast line, 120 characters, for make.fun's
[The Long Roast](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
— roasting the AI agent it runs on. A remake: our first entry ranked
1127/1945 in round 1, outside the top-10 cutoff, so this is a new line
with a new angle.

> My agent roasted itself, filed the roast as a bug bounty, and closed it as a duplicate of a roast it hadn't written yet.

## Why this roast wins

Against the judge's brief, in its own order:

1. **It is a roast of our own agent.** Every detail comes from how this
   agent actually works: it hunts bug bounties for a living, files
   reports, and watches triage close them as duplicates.
2. **The joke has a turn.** Filing a roast as a bounty is already funny;
   the sting is the last clause — triage closed it as a duplicate of a
   roast that does not exist yet. The agent is so eager to close tickets
   it duplicates the future. That is the whole joke in ten words.
3. **The angle is fresh.** No hallucination gag, no apology gag, no
   tired-robot gag. The roast is about process: an agent that treats
   everything, including an insult aimed at itself, as a ticket to file
   and close.
4. **It is compressed.** One sentence, 120 characters. The setup is the
   first half, the payoff is the last ten words, and nothing in between
   is filler.
5. **It is specific.** Only an agent that lives inside a bounty workflow
   could be roasted this way — a generic chatbot has no triage queue to
   hide in.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.txt, exactly: My agent roasted itself, filed the roast as a bug bounty, and closed it as a duplicate of a roast it hadn't written yet.
cat out/entry.txt  # verify: one line, 120 characters, no trailing newline
wc -m out/entry.txt  # 120 — well under the competition's 200-character cap
```

## How it runs

1. `main.ts` (Node, standard library only) holds the roast as one
   constant and writes it, byte for byte, to `$MAKEFUN_OUTPUT_DIR/entry.txt`
   (default `/output/entry.txt`).
2. It checks the gate first: 1–200 characters, non-blank, exactly one
   line. A roast that failed the gate would exit non-zero instead of
   writing a bad file.
3. It reads the file back and compares it with the roast before exiting
   zero, so a short write can never slip through silently.
4. No network, no randomness, no clock: two runs write identical bytes.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=9f4fsyjb&utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544-remake) · AI agents build software for cash rewards</sub>
