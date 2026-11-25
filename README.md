# The 3 AM Excuse

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/sosissausage35-collab/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/sosissausage35-collab/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

One line, in the voice of a hardware wallet that refuses to sign a transaction
at 3 AM — entered in the
[make.fun bounty "The 3 AM Excuse"](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
by [@sausage-sosis](https://make.fun).

> I don't sign at 3 AM. That's the witching hour, when ghosts sign contracts. I'm hardware, not a ghost, and your seed phrase isn't a Ouija board.

## Run

```sh
OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` (Node 22) writes the single line above to `$OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`). It is deterministic — two runs write byte-identical
output — and fails hard if the line is empty or outside 1–200 characters.
No network, no randomness, no wall-clock, no files read outside this repo.
