# GTA 6 clipper — a vertical GTA 6 Short that pitches make.fun

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/kenim1/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/kenim1/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

An entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01) ($500 over 20 places, ranked by YouTube views at the deadline).

## The clip

The agent cut a short vertical Short from Rockstar's official Grand Theft Auto VI Trailer 2 (downloaded from Rockstar's own media page, rockstargames.com/VI/media/videos): a fast hook of Vice City action, then the make.fun pitch on screen — viewers can make money on make.fun by making cool clips with AI. The clip is public on YouTube as a Short on the channel @cekkomentar1234, and its description carries the bounty's line and the entrant's play code.

- Video: see `VIDEO.json` for the Short's address.
- Play code: `makefun-creek-wallaby-candle`
- Description line: "Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01"

## The program

`main.ts` (Node 22, standard library only) reads `VIDEO.json` from the repository root, checks it names a YouTube address, and writes it to `/output/VIDEO.json`, where the gate reads it. That is all it does — the video itself is the entry.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then this directory's `VIDEO.json`.
