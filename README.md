# Last Text at One Percent

[![make.fun](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![Rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/RianKuntul/last-text-1pct-line/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![Reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/RianKuntul/last-text-1pct-line/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)

Entry for the make.fun bounty **Last Text at One Percent**: a program that
writes the funniest final text message a phone sends at one percent battery —
one line, under 200 characters, in the voice of the dying phone itself. The
phone doesn't beg for a charger or make a battery pun; it uses its last
seconds to reveal what it knows about its owner, then takes the secrets to
the grave. Short, punchy, and specific enough to make a reader laugh out
loud rather than smile politely.

## Run

```sh
node main.ts
```

This writes the single line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(defaulting to `/output/entry.txt`). The program refuses to write anything
outside 1–200 characters, anything that is only whitespace, or anything
containing a newline.
