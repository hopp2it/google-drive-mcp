---
property: google-drive-mcp
type: mcp-server
role: Local fork of @piotr-agier/google-drive-mcp for Google Workspace MCP access
last_updated: 2026-06-27
last_session: 2026-06-27 (QNTX-315 bootstrapped neutral doc-standard files for google-drive-mcp and fixed Windows test execution.)
last_session_model: codex-gpt-5
syntax_version: 6.6.0
live_url: null
deploy_target: npm/local MCP server
repo_status: master clean before bootstrap; active feature work exists on separate branches
health_score: null
---

# google-drive-mcp - Current State

> **Contract:** This file describes what is actually true right now. Forward plans live in [PLAN.md](PLAN.md). Neutral project instructions live in [INSTRUCTIONS.md](INSTRUCTIONS.md).

## What google-drive-mcp Is

`google-drive-mcp` is a local fork of `@piotr-agier/google-drive-mcp`, a TypeScript MCP server for Google Drive, Docs, Sheets, Slides, and Calendar. It exposes Google Workspace file/document/spreadsheet/presentation/calendar operations through an MCP client using OAuth 2.0 desktop credentials and token refresh.

This repo is infrastructure. It does not itself authorize any QNTx property or client to use Google Drive. Consuming properties must declare their own `Google_Drive` MCP allowlist and non-secret scope boundaries in their own `property-context.yaml`.

## Running Versions

- **Package:** `@piotr-agier/google-drive-mcp` v2.1.0
- **Runtime:** Node.js >=18
- **Stack:** TypeScript, MCP SDK, Google APIs, Express, OAuth local auth, Zod
- **Entry point:** `dist/index.js` / `google-drive-mcp` bin after build
- **Live URL:** n/a (local MCP stdio/server process, not a website)
- **Deploy target:** npm/local runtime

## What's Live and Working

- README documents Google Cloud setup, OAuth consent, required APIs, and natural-language usage examples.
- Package scripts exist for `npm run build`, `npm test`, `npm run lint`, typecheck, auth, and start.
- Tool surface covers Drive file management/search, Docs editing, Sheets, Slides, Calendar, shared drives, and MCP resource access.
- Neutral doc-standard bootstrap is now present on `master`: `property-context.yaml`, `STATE.md`, `PLAN.md`, generated `INSTRUCTIONS.md`, and generated agent adapters.

## Known Gaps and Bugs

- Active feature work exists on separate branches; doc-standard maintenance should stay on `master` unless deliberately coordinated.
- Google OAuth tokens/credential stores are sensitive and must remain outside committed docs/code.
- No consuming property may use this server without its own `Google_Drive` allowlist/scopes declaration.

## Recent Shipped (last 14 days)

- 2026-06-27 - QNTX-315: google-drive-mcp now has property-context.yaml, STATE.md, PLAN.md, generated INSTRUCTIONS.md, and generated Claude/Codex/Gemini adapters; npm test is cross-platform on Windows; audit score…
- 2026-06-27 - Bootstrapped neutral QNTx property docs for google-drive-mcp as Batch A doc-standard migration work.

## Open Corrections Routed

- None.