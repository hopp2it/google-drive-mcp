# INSTRUCTIONS — google-drive-mcp

<!-- BEGIN SYNTAX:generated — do not edit between these markers; regenerated from property-context.yaml -->

> **Generated from `property-context.yaml`** by `syntax/scripts/property-instructions.mjs`. Do not edit directly - update the context file and regenerate.

## What This Project Is

- **Type:** mcp-server
- **Role:** Local fork of @piotr-agier/google-drive-mcp, providing MCP access to Google Drive, Docs, Sheets, Slides, and Calendar via OAuth.
- **Live URL:** null
- **Owner:** QNTx Labs (Jeff Hopp); upstream package by Piotr Agier
- **Parent corpus:** `../../qntx/`

## Read First

1. [STATE.md](STATE.md) - current live reality
2. [PLAN.md](PLAN.md) - forward work only
3. [property-context.yaml](property-context.yaml) - local structured source of truth
4. [../../qntx/corpus/PROPERTY-INSTRUCTION-CONTRACT.md](../../qntx/corpus/PROPERTY-INSTRUCTION-CONTRACT.md) - neutral property instruction contract
5. [../../qntx/corpus/DIRECTORY.md](../../qntx/corpus/DIRECTORY.md) - canonical file locations
6. [../../qntx/corpus/ROUTER.md](../../qntx/corpus/ROUTER.md) - task routing and escalation

## Tool Scoping

- **CRM:** null
- **Email marketing:** null
- **Analytics:** null
- **Ad platforms:** null
- **PM:** null

If a tool is not listed here, do not use it without explicit approval.

## Enforced MCP Allowlist

This property is allowed to call the following MCP servers. Anything not on this list is blocked by the `property-tool-scope` PreToolUse hook.

_No MCP servers allowed for this property._

High-risk account-connected servers (Google_Drive, Publer, and GoHighLevel/GHL) also require a matching `mcp_scopes.<server>:` block declaring account/root/workspace and token-reference fields. Declare non-secret labels and field names only; keep secret values in env vars or token files.

Declared service scopes:

_No service scopes declared._

To change this, edit `property-context.yaml` and regenerate. The list is machine-readable; the prose `Tool Scoping` section above is the human-readable companion.

## Tech Stack

- **Framework:** TypeScript (Node.js >=18, MCP SDK stdio transport)
- **Runtime:** Node.js
- **Deploy:** npm/local MCP server via dist/index.js or google-drive-mcp bin
- **Key integrations:** Google Drive API, Google Docs API, Google Sheets API, Google Slides API, Google Calendar API, OAuth 2.0 desktop auth with token refresh, MCP (Model Context Protocol) stdio transport

## Session Start

When shell access is available, run the neutral startup check before making assumptions:

- `node "$SYNTAX_HOME/scripts/session-start.mjs" --root=<property-root>` (also resolves to ../../syntax/scripts/session-start.mjs)

Use its output to read `STATE.md`, known gaps, stale-state warnings, and relevant playbooks. Claude may surface this via hooks; Codex/Gemini should run the same script explicitly when their runtime does not.

## Session Close

Use one shared close-out path regardless of agent:

- Preferred executable path: `"$SYNTAX_HOME/scripts/session-close.mjs"` (persisted once per machine by `syntax/scripts/bootstrap-syntax-home.mjs`; if `$SYNTAX_HOME` is unset, it is the `syntax/` checkout sibling to `qntx/` — i.e. `../../syntax/scripts/session-close.mjs`)
- Human-readable contract: [../../syntax/commands/session-close.md](../../syntax/commands/session-close.md)

Close is not complete until:

1. `STATE.md` has been updated for this session
2. shipped work has moved from `PLAN.md` to `STATE.md`
3. the ledger entry has been appended to `../../qntx/ledgers/google-drive-mcp.md`
4. Claim-check is declared via `--claim-check=verified:<evidence>|none:<reason>` (or `repulled:<source>` / `live:<source>`)
5. ClickUp task state is declared via `--clickup=logged:<task-ids>|none:<reason>` (the runner refuses to close without it)
6. touched repos have been committed and pushed per shipping discipline
7. any new memory has been written and indexed

## Principles

The shared principles live at [../../qntx/corpus/PRINCIPLES.md](../../qntx/corpus/PRINCIPLES.md). Cite them by number when they apply.

## Brand Manifest

not applicable - MCP server infrastructure, not a content property

## Relevant Playbooks

- No property-specific playbooks declared yet.

## Local Constraints

- This repo is infrastructure only. Do not infer that any client or property may use Google Drive from this server fork existing locally.
- Google OAuth credentials and refresh tokens are secrets. Never commit or paste credential JSON, token stores, client IDs tied to private contexts, or refresh tokens.
- Consuming properties own their own Google_Drive mcp_allowlist and mcp_scopes declarations; cross-property Drive access is not allowed.
- Work on master for doc-standard maintenance; avoid mixing docs into active feature branches.
- Run npm run build and npm test after source changes; docs-only changes may verify with audit-docs plus generated-instruction checks.

## Git Commits

Every AI-authored commit ends with:

    Co-Authored-By: SYNTAX AI v6.6.0 (using {exact model name}) <syntax@qntxlabs.com>

See [../../syntax/rules/git-commits.md](../../syntax/rules/git-commits.md).

<!-- END SYNTAX:generated -->

## Local Notes

_No local notes yet. Add property-specific prose here. Anything outside the SYNTAX:generated markers above is preserved across regenerations._
