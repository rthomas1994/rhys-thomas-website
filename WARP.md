# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview

This repository currently contains only Node package metadata (`package.json`) and an npm lockfile (`package-lock.json`). There is no application code, framework configuration, or development tooling configured yet. As you add code and tooling, update this file so future Warp agents can operate efficiently.

## Commands

Package manager: npm (detected via `package-lock.json`).

- Install dependencies
  - Fresh/CI install: `npm ci`
  - Local install (when modifying dependencies): `npm install`

- Build, Lint, Test
  - Not configured. No `scripts` are defined in `package.json`, so there are currently no build, lint, or test commands to run.
  - After you add scripts, prefer the following conventions so agents can rely on them:
    - Build: `npm run build`
    - Dev server (if applicable): `npm run dev`
    - Lint: `npm run lint`
    - Test (all): `npm test`
    - Test (single): provide a script/CLI option that supports file or pattern selection (e.g., `npm test -- path-or-pattern`), and document it here.

## Architecture and structure

- No source code or framework is present yet. There are no `src/`, `app/`, `pages/`, or similar directories, and no tool configs (e.g., ESLint, Prettier, Vite/Next/Remix configs).
- Once a framework and structure are introduced, document the “big picture” here (framework, entry points, routing model, build tool, and where domain logic lives). Avoid listing every file; focus on how pieces fit together (e.g., UI framework + router, server/API layer, data fetching, and shared utilities).

## Repository rules and docs

- No project-specific agent rules (`WARP.md` existed only as this file), no `README.md`, and no Claude/Cursor/Copilot rules were found at the time of writing.
- If you add any of these, summarize the important parts here (e.g., coding standards, commit conventions, or agent behavior constraints) so agents can follow them.
